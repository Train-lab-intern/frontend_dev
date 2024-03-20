import React from "react";
import { Header } from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Path } from "../../../constants/path";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { NotificationComponent } from "./NotificationComponent";
import { useState } from "react";
import { CommonButton } from "../../../components/CommonButton/CommonButton";
import "./ChangePassword.css";

function ChangePassword() {
  type Input = {
    email: string;
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Input>({
    mode: "onSubmit",
  });
  type NotificationComponentProps = {
    messages: string[];
    handleClose: (index: number) => void;
  };

  // @ts-ignore
  const [passwordChangeState, setPasswordChangeState] = useState<string>("");
  // @ts-ignore
  const [messages, setMessages] = useState<string[]>([]);
  // @ts-ignore
  const [showNotification, setShowNotification] = useState(false);
  // @ts-ignore
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            email: data.email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
      if (!response.ok) {
        new Error("Ошибка при смене пароля");
      }
      const json = await response.json();
      console.log(json);
      if (json.id) {
        setMessages((prevMessages) => [
          ...prevMessages,
          "На адрес Вашей электронной почты было отправлено письмо с инструкциями по смене пароля.",
        ]);
        setPasswordChangeState("success");
        setShowNotification(true);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          "Ошибка при смене пароля.",
        ]);
        setPasswordChangeState("error");
        setShowNotification(true);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        "Ошибка при смене пароля.",
      ]);
      setPasswordChangeState("error");
    }
  };

  return (
    <>
      <div className="container w-full md:h-full">
        <Header />
        <main>
          <div className="md:w-72 mx-40 my-50 mt-10 sm:w-72">
            <Link to={Path.HOME}></Link>
          </div>
          {showNotification ? (
            <NotificationComponent message={messages} />
          ) : (
            <div>
              <Form onSubmit={handleSubmit(onSubmit)} className="m-5">
                <h6
                  style={{ marginBottom: "42px" }}
                  className="font-semibold text-center"
                >
                  Укажите адрес Вашей электронной почты, указанной при
                  регистрации.
                  <br />
                  Мы вышлем ссылку для смены пароля
                </h6>
                <Form.Control
                  type="email"
                  placeholder="Почта"
                  className={`md:w-80 h-10 border-1 ${errors.email ? "border-red-500" : "border-gray-200"} rounded-md mx-auto text-center mb-10`}
                  style={{
                    maxWidth: "500px",
                    borderColor: errors.email ? "red" : "#282828",
                    borderWidth: "1px",
                  }}
                  {...register("email", {
                    required: "Это поле обязательно для заполнения",
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Некорректный адрес электронной почты",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-center" style={{ color: "red" }}>
                    {errors.email.message}
                  </div>
                )}
              </Form>
              <CommonButton
                variant={"primary"}
                className="button-change-password"
                onClick={handleSubmit(onSubmit)}
              >
                Сменить пароль
              </CommonButton>
              {showNotification &&
                messages.map((message, index) => (
                  <NotificationComponent key={index} message={message} />
                ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default ChangePassword;

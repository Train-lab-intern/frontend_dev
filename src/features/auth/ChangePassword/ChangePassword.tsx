import React from 'react';
import bannerImg from '../../../assets/img/banner.jpg'
import Header from "../../../components/Header/Header";
import Footer from '../../../components/Footer/Footer'
import styles from './ChangePassword.module.css'
import logo from '../../../assets/img/fullLogo.jpg'
import {Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import {Path} from "../../../constants/path";


function ChangePassword() {
    type Input = {
        newPassword : string
        repeatPassword : string
    }

    const {
        register,
        formState:{errors},
        handleSubmit,
    } = useForm<Input>({
        mode: "onSubmit"
    })

    function onSubmit(){

    }

    return (
        <>
            <div className='container w-full md:h-full'>
                <Header/>
                <main>
                    <div className="md:w-72 mx-40 my-50 mt-10 sm:w-72">
                        <Link to={Path.HOME}>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>

                    <div >
                        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between flex-col m-5">

                            <h6 className="mx-auto font-semibold  mb-2">Введите новый пароль</h6>
                            <input
                                type="password"
                                className="md:w-80 h-10 border-1 border-gray-200 rounded-md mx-auto m-2 text-center"
                                {...register('newPassword',{
                                    required: 'Обязательное поле',
                                    pattern:{
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                        message: "Пароль вводится латинскими буквами,должен состоять минимум из восьми символов,должен содержать как минимум одну букву, одну цифру,должен содержать символы верхнего и нижнего регистра."
                                    }
                                    }
                                )}
                            />

                            {errors.newPassword && (<div className="text-center text-red-500 text-lg">{errors.newPassword.message}</div>)}
                            <br/>

                            <h6 className="mx-auto font-semibold mb-2">Повторите пароль</h6>
                            <input
                                type="password"
                                className="md:w-80 h-10 border-1 border-gray-200 rounded-md mx-auto text-center"
                                {...register('repeatPassword',{
                                        required: 'Обязательное поле',
                                        pattern:{
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                                            message: "Пароль вводится латинскими буквами,должен состоять минимум из восьми символов,должен содержать как минимум одну букву, одну цифру,должен содержать символы верхнего и нижнего регистра."
                                        }
                                    }
                                )}
                            />
                            {errors.repeatPassword && (<div className="text-center text-red-500 text-lg">{errors.repeatPassword.message}</div>)}

                            <button className="md:w-80 h-12 border-1 border-gray-200 rounded-md mx-auto text-center m-2 bg-gray-400 text-white text-lg font-bold hover:bg-gray-500">Сохранить</button>
                        </form>
                    </div>
                </main>


            </div>
        </>
    );
}

export default ChangePassword;
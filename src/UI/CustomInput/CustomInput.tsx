import { ChangeEventHandler, useEffect, useState } from 'react';
import './CustomInput.scss';

interface ICustomInputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  id: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  errorMesage?: string;
  callback: ChangeEventHandler<HTMLInputElement>;
}

export default function CustomInput({
  type,
  id,
  name,
  required,
  placeholder,
  errorMesage,
  callback,
}: ICustomInputProps) {
  const requiredMessage = 'Это поле обязательно для заполнения';
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(!!errorMesage?.length);
  }, [errorMesage]);

  return (
    <div className="customInput">
      <input
        className={isError || required ? 'customInput-error' : ''}
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={callback}
      />
      <div className="error">
        <span className={`error-message ${isError ? 'visible' : ''}`}>
          {errorMesage}
        </span>
        <span className={`error-required ${required ? 'visible' : ''}`}>
          {requiredMessage}
        </span>
      </div>
    </div>
  );
}

CustomInput.defaultProps = {
  type: 'text',
  placeholder: '',
  required: false,
  errorMesage: '',
};

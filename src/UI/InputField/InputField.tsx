import { useState } from 'react';
import EyeIcon from '../../assets/icons/IconsSvg/EyeIcon';
import EyeIconHidden from '../../assets/icons/IconsSvg/EyeIconHidden';
import './InputField.css';

interface InputFieldProps {
    type?: string;
    name?: string;
    placeholder: string;
    className?: string;
    errorText?: string;
    isError?: boolean;
    //   value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
}

function InputField({
    type = 'text',
    isError = false,
    name = '',
    placeholder = '',
    className = '',
    onChange,
    errorText = '' }: InputFieldProps) {

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="input-group-UI">
            <input
                className={`${className} ${isError ? 'error' : ''}`}
                type={isPasswordVisible ? 'password' : type}
                id='input-UI'
                required
                name={name}
                placeholder=""
                onChange={(e) => onChange(e.target.value)}
            />
            <label className={`placeholder-label ${isError ? 'error' : ''}`} htmlFor='input-UI'>{placeholder}</label>
            <div className={`${isError ? 'input-error-show' : 'input-error-hidden'}`}>{errorText}</div>

            {isPasswordVisible ? (
                <EyeIcon onClick={() => { setPasswordVisible(false) }} passwordError={false} emailError={false} />
            ) : (
                <EyeIconHidden onClick={() => { setPasswordVisible(true) }} passwordError={false} emailError={false} />
            )}
        </div>
    );
}
export default InputField;
import './InputField.css';
// import { useState } from 'react';


interface InputFieldProps {
    type?: string;
    name?: string;
    placeholder: string;
    className?: string;
    errorText?: string;
    isError: boolean;
    //   value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
}

// export function InputField: React.FC<InputFieldProps> ({ type, isError, name, placeholder, className, errorText }){
function InputField({
    type = 'text',
    isError = false,
    name = '',
    placeholder = '',
    className = '',
    onChange,
    errorText = '' }: InputFieldProps) {

    // const [isPasswordVisible, setPasswordVisible] = useState(false);
    //   const handleChange = (e: { target: HTMLInputElement }) => {
    //     const newValue = e.target.value;
    //   }

    // const togglePasswordVisibility = (): void => {
    //     setPasswordVisible(!isPasswordVisible);
    // }

    // if (type === 'password') {
    //     setPasswordVisible(true);
    // } else {
    //     setPasswordVisible(false);
    // }

    return (
        <div className="input-group-UI">
            <input
                className={`${className} ${isError ? 'error' : ''}`}
                type={type}
                id='input-UI'
                required
                name={name}
                placeholder=""
                onChange={(e) => onChange(e.target.value)}
            />
            <label className={`placeholder-label ${isError ? 'error' : ''}`} htmlFor='input-UI'>{placeholder}</label>
            <div className={`${isError ? 'input-error-show' : 'input-error-hidden'}`}>{errorText}</div>
            {/* {isPasswordVisible ? (
                <span className='openEye' onClick={togglePasswordVisibility}></span>
            ) : (
                <span className='eyeIconHidden' onClick={togglePasswordVisibility}></span>
            )} */}
        </div>
    );
}
export default InputField;
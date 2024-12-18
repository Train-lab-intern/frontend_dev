/* eslint-disable */
import React from 'react';

const EyeIcon = ({ onClick, passwordError, emailError }) => {
  return (
    <>
      <svg
        onClick={onClick}
        className={
          'eye-icon' +
          (passwordError ? ' password-error-icon' : '') +
          (emailError ? ' email-error-icon' : '') +
          (emailError && passwordError ? ' both-error-icon' : '')
        }
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4.75C6.20507 4.75 4.75 6.20507 4.75 8C4.75 9.79493 6.20507 11.25 8 11.25C9.79493 11.25 11.25 9.79493 11.25 8C11.25 6.20507 9.79493 4.75 8 4.75ZM6.25 8C6.25 7.0335 7.0335 6.25 8 6.25C8.9665 6.25 9.75 7.0335 9.75 8C9.75 8.9665 8.9665 9.75 8 9.75C7.0335 9.75 6.25 8.9665 6.25 8Z"
          fill="#222222"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2.25C4.36891 2.25 1.27199 4.52873 0.049516 7.73263C-0.016185 7.90483 -0.0161849 8.09518 0.0495162 8.26737C1.272 11.4713 4.36891 13.75 8 13.75C11.6311 13.75 14.728 11.4713 15.9505 8.26737C16.0162 8.09518 16.0162 7.90482 15.9505 7.73263C14.728 4.52874 11.6311 2.25 8 2.25ZM8 12.25C5.11486 12.25 2.63408 10.5017 1.55935 8C2.63408 5.49833 5.11486 3.75 8 3.75C10.8851 3.75 13.3659 5.49833 14.4406 8C13.3659 10.5017 10.8851 12.25 8 12.25Z"
          fill="#222222"
        />
      </svg>
    </>
  );
};
export default EyeIcon;

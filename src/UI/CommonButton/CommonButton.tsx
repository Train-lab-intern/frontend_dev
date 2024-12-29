/* eslint-disable */
import styles from './CommonButton.module.scss';

interface CommonButtonPropType {
  variant: 'primary' | 'outline';
  children: string;
  className?: string;
  callBackFunction?: () => void;
}

export default function CommonButton({
  variant,
  children,
  className,
  callBackFunction
}: CommonButtonPropType) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className && className}`}
      onClick={callBackFunction}
      type="submit"
    >
      {children}
    </button>
  );
}

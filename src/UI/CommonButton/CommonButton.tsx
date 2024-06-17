/* eslint-disable */
import styles from './CommonButton.module.scss';

interface CommonButtonPropType {
  variant: 'primary' | 'outline';
  children: string;
  className?: string;
}

export default function CommonButton({
  variant,
  children,
  className,
}: CommonButtonPropType) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className && className}`}
      type="submit"
    >
      {children}
    </button>
  );
}

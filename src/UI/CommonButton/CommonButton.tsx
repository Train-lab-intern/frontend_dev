import styles from './CommonButton.module.scss';

interface CommonButtonPropType {
  variant: 'primary' | 'outline';
  className: string;
  children: string;
}

export default function CommonButton({
  variant,
  className,  
  children
}: CommonButtonPropType) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

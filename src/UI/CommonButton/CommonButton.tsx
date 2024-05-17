import styles from './CommonButton.module.scss';

interface CommonButtonType {
  text: string;
  variant: 'primary' | 'outline';
  className: string;
}

export default function CommonButton({
  variant,
  className,
  text,
}: CommonButtonType) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      type="button"
    >
      {text}
    </button>
  );
}

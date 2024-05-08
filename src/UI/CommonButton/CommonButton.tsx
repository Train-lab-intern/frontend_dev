import styles from './CommonButton.module.scss'
import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type PropsType = DefaultButtonPropsType & {
  variant: 'primary' | 'outline'
}

export const CommonButton: React.FC<PropsType> = (
  {
    variant,
    className,
    ...restProps
  }
) => {

  const finalClassName = `${styles.button} ${styles[variant]} ${className}`

  return (
    <button
      className={finalClassName}
      {...restProps}
    />
  );
}
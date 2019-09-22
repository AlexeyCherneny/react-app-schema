import * as React from 'react';

import { IButtonProps } from './interfaces';

import * as styles from './styles.scss';

const Button = (props: IButtonProps) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  )
}

export default Button;
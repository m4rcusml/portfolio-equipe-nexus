import { HTMLAttributes } from 'react';
import './styles.css';

type Props = HTMLAttributes<HTMLButtonElement> & {
  filled?: boolean;
}

export function Button({ filled, ...rest }: Props) {
  return (
    <button
      className={filled ? "button filled" : "button"}
      {...rest}
    />
  )
}
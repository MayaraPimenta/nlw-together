import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
      <button 
      className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>
  )
}

// as {} executam o codigo dentro o texto puro só imprime o que está escrito
import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes <HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
      <button className="button" {...props}/>
  )
}

// as {} executam o codigo dentro o texto puro só imprime o que está escrito
import {useState} from 'react';

export function Button() {
  //let counter = 0;
  const [counter, setCounter] = useState(0)

  function increment() {
    //counter += 1;
    setCounter(counter + 1)
  }

  return (
      <button onClick={increment}>
        {counter}
      </button> // as {} executam o codigo dentro o texto puro só imprime o que está escrito
  )
}
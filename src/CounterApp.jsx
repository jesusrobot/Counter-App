import { useState } from 'react'

function CounterApp({ init }) {
  const [ counter, setCounter ] = useState( init )

  return (
    <div className='counter'>
      <h1>Contador</h1>
      <h2 className='counter_display'>{ counter }</h2>
      <div className='counter_buttons'>
        <button onClick={ () => setCounter(counter + 1) }>Agregar</button>
        <button onClick={ () => setCounter(init) }>Reestablecer</button>
        <button onClick={ () => setCounter(counter - 1) }>Quitar</button>
      </div>
    </div>
  )
}

export default CounterApp

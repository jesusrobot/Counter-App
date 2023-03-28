import { fireEvent, render, screen } from "@testing-library/react"
import CounterApp from "../src/CounterApp"

describe('Pruebas en el componente <CounterApp />', () => { 

  const INIT_VALUE = 0

  test('Debe de hacer match con un ultima snapshot', () => {
    const { container } = render(<CounterApp init={ INIT_VALUE } />)

    expect( container ).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial pasado por props', () => {
    render(<CounterApp init={ INIT_VALUE }/>)
    
    expect(screen.getByText(INIT_VALUE)).toBeTruthy()
  })

  test('Debe incrementar el counter al hacer click en el btn "Agregar"', () => {
    render(<CounterApp init={ INIT_VALUE } />)

    fireEvent.click(screen.getByText('Agregar'))
    
    expect(screen.getByText(INIT_VALUE + 1)).toBeTruthy()
  })

  test('Debe decrementar el counter al hacer click en el btn "Quitar"', () => {
    render(<CounterApp init={ INIT_VALUE } />)

    fireEvent.click(screen.getByText('Quitar'))
    
    expect(screen.getByText(INIT_VALUE - 1)).toBeTruthy()
  })

  test('Debe reiniciar el counter al hacer click en el btn "Reestablecer"', () => {
    render(<CounterApp init={ INIT_VALUE } />)

    fireEvent.click(screen.getByText('Agregar'))
    fireEvent.click(screen.getByText('Agregar'))
    fireEvent.click(screen.getByText('Reestablecer'))
    
    expect(screen.getByText(INIT_VALUE)).toBeTruthy()
  })
})
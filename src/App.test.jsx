import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the heading and initial count', () => {
    render(<App />)
    expect(screen.getByText('React CI/CD App')).toBeInTheDocument()
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')
  })

  it('increments, decrements, and resets the counter', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: '+1' }))
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1')

    fireEvent.click(screen.getByRole('button', { name: '-1' }))
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')

    fireEvent.click(screen.getByRole('button', { name: '+1' }))
    fireEvent.click(screen.getByRole('button', { name: 'Reset' }))
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0')
  })
})

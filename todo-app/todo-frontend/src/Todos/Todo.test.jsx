import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders todo text', () => {
  const todo = { text: 'Write code', done: false }
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
  screen.getByText('Write code')
})

test('renders not done status', () => {
  const todo = { text: 'Write code', done: false }
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
  screen.getByText('This todo is not done')
})

test('renders done status', () => {
  const todo = { text: 'Write code', done: true }
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
  screen.getByText('This todo is done')
})

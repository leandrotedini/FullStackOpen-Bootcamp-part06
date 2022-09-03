import Anecdotes from "./components/Anecdotes"
import AnecdoteFilter from "./components/AnecdotesFilter"
import AnecdotesForm from "./components/AnecdotesForm"
import Notification from "./components/Notification"
import { initializeAnecdotes } from './reducers/anecdoteReducer'

import { useDispatch } from 'react-redux'
import { useEffect } from "react"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteFilter />
      <Anecdotes />
      <AnecdotesForm />
    </div>
  )
}

export default App
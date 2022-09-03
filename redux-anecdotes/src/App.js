import Anecdotes from "./components/Anecdotes"
import AnecdoteFilter from "./components/AnecdotesFilter"
import AnecdotesForm from "./components/AnecdotesForm"
import Notification from "./components/Notification"
import anecdotesService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    anecdotesService.getAll().then( anecdotes => {
      dispatch(initializeAnecdotes(anecdotes))
    })
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
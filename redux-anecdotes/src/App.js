import Anecdotes from "./components/Anecdotes"
import AnecdoteFilter from "./components/AnecdotesFilter"
import AnecdotesForm from "./components/AnecdotesForm"
import Notification from "./components/Notification"

const App = () => {
  

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
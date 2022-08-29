import Anecdotes from "./components/Anecdotes"
import AnecdotesForm from "./components/AnecdotesForm"
import Notification from "./components/Notification"

const App = () => {
  

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Anecdotes />
      <AnecdotesForm />
    </div>
  )
}

export default App
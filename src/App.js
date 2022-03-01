import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn Ruby', complete: true },
    {id: 2, title: 'Learn JS', complete: false },
    {id: 3, title: 'Learn ReactJS', complete: false },
  ])

  const renderTitles = () => {
    return todos.map( todo => {
      return(
        <li>{todo.title}</li>
      )
    })
  }


  return (
    <>
      <h1>My Todo List</h1>
      <ul>
        {renderTitles()}
      </ul>
    </>
  )
}

export default App;

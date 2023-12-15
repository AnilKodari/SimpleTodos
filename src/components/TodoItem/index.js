import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, updateTodosList, todosList} = props
  const {id, title} = todoDetails

  const [editing, setEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const toggleEdit = () => {
    setEditing(!editing)
  }

  const saveEditedTitle = () => {
    const updatedTodo = {
      ...todoDetails,
      title: editedTitle,
    }

    const updatedTodosList = todosList.map(eachTodo =>
      eachTodo.id === id ? updatedTodo : eachTodo,
    )

    setEditing(false)
    updateTodosList(updatedTodosList)
  }

  const handleTitleChange = e => {
    setEditedTitle(e.target.value)
  }

  return (
    <li className="todo-item">
      {editing ? (
        <>
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
          <button
            type="button"
            onClick={saveEditedTitle}
            className="delete-btn save-btn"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="title">{title}</p>
        </>
      )}
      <>
        <button
          type="button"
          className="delete-btn edit-btn"
          onClick={toggleEdit}
        >
          Edit
        </button>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </>
    </li>
  )
}

export default TodoItem

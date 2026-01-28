import React, { useState, type ChangeEvent } from 'react'
import { useTasks } from './useTasks'

export function App() {
  const { tasks, newTask, handleInputChange, addTask, deleteTask, markDone, markUnDone } =
    useTasks()

  return (
    <article>
      <header>
        <h1>ToDo</h1>
        <form onSubmit={addTask}>
          <input
            placeholder="Enter task"
            value={newTask}
            onChange={handleInputChange}
            required
            autoFocus
          />
          <button>Add</button>
        </form>
      </header>
      <ol id="todo-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              color: task.status === 'done' ? 'green' : task.status === 'undone' ? 'red' : 'white',
            }}
          >
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
            <button onClick={() => markDone(task.id)}>✔️</button>
            <button onClick={() => markUnDone(task.id)}>❌</button>
          </li>
        ))}
      </ol>
    </article>
  )
}

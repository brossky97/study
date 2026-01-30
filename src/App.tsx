import { useTasks } from './useTasks'

export function App() {
  const { tasks, addTask, deleteTask, markDone, markUnDone } = useTasks()

  return (
    <article className="article">
      <header className="header">
        <h1>ToDo</h1>
        <form
          onSubmit={addTask}
          className="form"
        >
          <input
            name="task"
            placeholder="Enter task"
            required
            autoFocus
          />
          <textarea
            placeholder="Enter description"
            name="descriptionTask"
            required
          ></textarea>
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
            <div className="content">
              <span>{task.title}</span>
              <button onClick={() => deleteTask(task.id)}>🗑️</button>
              <button onClick={() => markDone(task.id)}>✔️</button>
              <button onClick={() => markUnDone(task.id)}>❌</button>
              <p>{task.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  )
}

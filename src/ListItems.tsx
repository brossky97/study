export default function List({ tasks, deleteTask, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ color: task.status === 'done' ? 'green' : 'red' }}
        >
          {task.title} {}
          {task.description}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => toggleTask(task.id)}>Status</button>
        </li>
      ))}
    </ul>
  )
}

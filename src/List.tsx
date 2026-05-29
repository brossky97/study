export default function List({ tasks, deleteTask, toggleTask }) {
  {
    /** Props Drilling, парашно. І знову пройобані типи */
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ color: task.status === 'done' ? 'green' : 'red' }}
        >
          {task.title}
          {'  '}{' '}
          {/** GG, так ніхто не робить, для цього існує CSS, щоб робити проміжки між текстом чи відступи */}
          {task.description}
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button onClick={() => toggleTask(task.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  )
}

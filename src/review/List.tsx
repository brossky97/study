import { useTasks } from './useTasks'
import { deleteTask, toggleIsTaskDone } from './taskActions'
import type { Task } from './types'

const handleRemoveClick = ({
  e,
  task,
  setTasks,
}: {
  e: React.MouseEvent<HTMLButtonElement>
  task: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) => {
  e.preventDefault()
  deleteTask({ id: task.id, setTasks })
}

const handleIsDoneClick = ({
  e,
  task,
  setTasks,
}: {
  e: React.MouseEvent<HTMLButtonElement>
  task: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) => {
  e.preventDefault()
  toggleIsTaskDone({ id: task.id, isDone: task.status === 'done', setTasks })
}

export function List() {
  const { tasks, setTasks } = useTasks()

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{ color: task.status === 'done' ? 'green' : 'red' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'inherit' }}>
            <div style={{ color: 'inherit' }}>{task.title}</div>
            <div style={{ color: 'black' }}>{task.description}</div>
          </div>
          <button onClick={(e) => handleRemoveClick({ e, task, setTasks })}>Delete</button>
          <button onClick={(e) => handleIsDoneClick({ e, task, setTasks })}>Toggle</button>
        </li>
      ))}
    </ul>
  )
}

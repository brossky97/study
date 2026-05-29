import { useTaskForm } from './useForm'
import { useTasks } from './useTasks'
import { addTask } from './taskActions'
import type { Task } from './types'

export function Form() {
  const { taskForm, setTaskForm, resetForm } = useTaskForm()
  const { setTasks } = useTasks()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaskForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleAddTaskClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const newTask = {
      id: new Date().getTime().toString(),
      ...taskForm,
    } satisfies Task

    addTask({ newTask, setTasks })
    resetForm()
  }

  return (
    <form>
      <input
        value={taskForm.title}
        onChange={handleInputChange}
      />
      <textarea
        value={taskForm.description}
        onChange={handleTextareaChange}
      />
      <button
        type="button"
        onClick={handleAddTaskClick}
      >
        Add
      </button>
    </form>
  )
}

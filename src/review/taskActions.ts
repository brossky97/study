import type { Task } from './types'

export const addTask = ({
  newTask,
  setTasks,
}: {
  newTask: Task
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) => {
  setTasks((prev) => [...prev, newTask])
}

export const deleteTask = ({
  id,
  setTasks,
}: {
  id: string
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) => {
  setTasks((prev) => prev.filter((task) => task.id !== id))
}

export const toggleIsTaskDone = ({
  id,
  isDone,
  setTasks,
}: {
  id: string
  isDone: boolean
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) => {
  setTasks((prev) =>
    prev.map((task) => {
      if (task.id === id) {
        return { ...task, status: isDone ? 'undone' : 'done' }
      } else return task
    }),
  )
}

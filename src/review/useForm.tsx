import { useState } from 'react'
import type { Task } from './types'

const DEFAULT_TASK: Omit<Task, 'id'> = { title: '', description: '', status: 'undone' }

export function useTaskForm() {
  const [taskForm, setTaskForm] = useState<typeof DEFAULT_TASK>(DEFAULT_TASK)

  const resetForm = () => {
    setTaskForm(DEFAULT_TASK)
  }

  return {
    taskForm,
    setTaskForm,
    resetForm,
  }
}

import { useState } from 'react'
import type { Task } from './types'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  return {
    tasks,
    filteredTasks,
    setTasks,
    setFilteredTasks,
  }
}

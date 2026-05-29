import { useEffect, useState } from 'react'
import type { Filters, Task } from './types'

const DEFAULT_FILTERS = {
  status: undefined,
} satisfies Filters

export function useFilters({
  tasks,
  setFilteredTasks,
}: {
  tasks: Task[]
  setFilteredTasks: React.Dispatch<React.SetStateAction<Task[]>>
}) {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)

  useEffect(() => {
    if (filters.status) {
      const filtered = tasks.filter((task) => task.status === filters.status)
      setFilteredTasks(filtered)
    } else setFilteredTasks(tasks)
  }, [filters, tasks, setFilteredTasks])

  return {
    filters,
    setFilters,
  }
}

import { useState } from 'react'
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

  const onStatusChange = (newStatus: Filters['status']) => {
    if (newStatus) {
      const filtered = tasks.filter((task) => task.status === newStatus)
      setFilteredTasks(filtered)
    } else setFilteredTasks(tasks)
  }

  return {
    filters,
    setFilters,
    onStatusChange,
  }
}

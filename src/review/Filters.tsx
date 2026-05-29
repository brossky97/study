import type { Filters } from './types'
import { useFilters } from './useFilters'
import { useTasks } from './useTasks'

type StatusFilterButton = { label: string; value: Filters['status'] }

const STATUS_FILTER_BUTTONS = [
  {
    label: 'All',
    value: undefined,
  },
  {
    label: 'Done',
    value: 'done',
  },
  {
    label: 'Undone',
    value: 'undone',
  },
] satisfies StatusFilterButton[]

export function Filters() {
  const { tasks, setFilteredTasks } = useTasks()
  const { filters, setFilters, onStatusChange } = useFilters({ tasks, setFilteredTasks })

  const handleStatusFilterClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    button: StatusFilterButton['value'],
  ) => {
    e.preventDefault()
    setFilters({ status: button })
    onStatusChange(button)
  }

  return (
    <>
      {STATUS_FILTER_BUTTONS.map((button) => (
        <button
          style={{ background: filters.status === button.value ? 'green' : 'grey' }}
          onClick={(e) => handleStatusFilterClick(e, button.value)}
        >
          {button.label}
        </button>
      ))}
    </>
  )
}

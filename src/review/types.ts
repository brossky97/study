export type Task = {
  id: string
  title: string
  description: string
  status: 'done' | 'undone'
}

export type Filters = {
  status: 'done' | 'undone' | undefined
}

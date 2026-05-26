import { useState } from 'react'

type Task = {
  title: string
  description: string
  id: string
  status: 'done' | 'undone'
}

export default function UseTaks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [form, setForm] = useState({ title: '', description: '' })
  const [filters, setFilter] = useState<'all' | 'done' | 'active'>('all')
  let visibleTasks
  if (filters === 'done') {
    visibleTasks = tasks.filter((task) => task.status === 'done')
  } else if (filters === 'active') {
    visibleTasks = tasks.filter((task) => task.status === 'undone')
  } else {
    visibleTasks = tasks
  }
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.title.trim() === '') return
    const newTask: Task = {
      title: form.title,
      description: form.description,
      id: crypto.randomUUID(),
      status: 'undone',
    }
    setTasks([...tasks, newTask])
    setForm({ title: '', description: '' })
  }
  const deleteTask = (id: string) => {
    const newArray = tasks.filter((task) => task.id !== id)
    setTasks(newArray)
  }
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'done' ? 'undone' : 'done' } : task,
      ),
    )
  }
  return {
    tasks,
    setTasks,
    form,
    setForm,
    addTask,
    deleteTask,
    toggleTask,
    setFilter,
    visibleTasks,
  }
}

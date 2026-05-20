import { useState } from 'react'

type Task = {
  title: string
  description: string
  id: string
  status: 'done' | 'undone'
}

export default function useTasks() {
  const [form, setForm] = useState({ title: '', description: '' })
  const input = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, title: e.target.value })
  const area = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setForm({ ...form, description: e.target.value })
  const cantSubmit = form.title.trim() === ''
  //
  const [tasks, setTasks] = useState<Task[]>([])
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTask: Task = {
      title: form.title,
      description: form.description,
      id: crypto.randomUUID(),
      status: 'undone',
    }
    setTasks((prev) => [...prev, newTask])
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
  return { tasks, addTask, deleteTask, toggleTask, input, area, cantSubmit, form }
}

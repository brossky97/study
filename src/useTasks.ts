import React, { useState } from 'react'

type Task = {
  id: string
  title: string
  description: string
  status?: 'done' | 'undone'
}
const initialTask: Task[] = []

export function useTasks() {
  const [tasks, setTasks] = useState(initialTask)

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.task as HTMLInputElement
    const area = form.descriptionTask as HTMLTextAreaElement
    setTasks([
      ...tasks,
      { id: self.crypto.randomUUID(), title: input.value, description: area.value },
    ])
    input.value = ''
    area.value = ''
  }
  const deleteTask = (id: string) => {
    const updatedTask = tasks.filter((task) => task.id !== id)
    setTasks(updatedTask)
  }
  const markDone = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: 'done' } : task)))
  }
  const markUnDone = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: 'undone' } : task)))
  }

  return { tasks, addTask, deleteTask, markDone, markUnDone }
}

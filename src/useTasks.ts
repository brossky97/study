import React, { useState, type ChangeEvent } from 'react'

type Task = {
  id: string
  text: string
  status?: 'done' | 'undone'
}
const initialTask: Task[] = []

export function useTasks() {
  const [tasks, setTasks] = useState(initialTask)
  const [newTask, setNewTask] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }
  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, { id: self.crypto.randomUUID(), text: newTask }])
      setNewTask('')
      e.preventDefault()
    }
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

  return { tasks, newTask, handleInputChange, addTask, deleteTask, markDone, markUnDone }
}

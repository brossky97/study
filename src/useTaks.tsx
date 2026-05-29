import { useState } from 'react'

type Task = {
  title: string
  description: string
  id: string
  status: 'done' | 'undone'
}

// ... НУ, цю кашу немає змісту розбирати. Я напишу як це мало б виглядати в папочці review, можеш в main.tsx імпортнути App.tsx звідти і запрацює то саме.
// Але написано по базовому мінімуму типу Strong Junior. Все що там написано ти маєш розуміти. Типу чому так і чому це базовий мінімум, там ще є що вдосконалювати.
// Суть не в завчити, а саме зрозуміти, що це мінімальні вимоги. AI агенти не генерують схожий код, вони можуть таке згенерувати, якщо ти поставиш їм питання настільки конкретно, наскільки справжній dev може поставити.
// В тебе деплой в GH-pages налаштовано, але він падає з помилкою. В розділі Actions в репозиторії на Github ти можеш подивитись що за помилка в момент падіння, по суті просто помилки які я описав падають, зокрема відсутність типів

export default function UseTaks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [form, setForm] = useState({ title: '', description: '' })
  const [filter, setFilter] = useState<'all' | 'done' | 'active'>('all')
  let visibleTasks
  if (filter === 'done') {
    visibleTasks = tasks.filter((task) => task.status === 'done')
  } else if (filter === 'active') {
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
    filter,
    form,
    setForm,
    addTask,
    deleteTask,
    toggleTask,
    setFilter,
    visibleTasks,
  }
}

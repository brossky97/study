import type { ChangeEvent } from 'react'

export default function Form({ addTask, form, setForm, setFilter }) {
  const input = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value })
  }
  const area = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, description: e.target.value })
  }
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('done')}>Done</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <form onSubmit={addTask}>
        <input
          value={form.title}
          onChange={input}
        />
        <textarea
          value={form.description}
          onChange={area}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

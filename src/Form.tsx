import type { ChangeEvent } from 'react'
import useTaks from './useTaks'

export default function Form({ addTask, form, setForm, setFilter, filter }) {
  const input = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value })
  }
  const area = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, description: e.target.value })
  }
  const filterButtons = ['all', 'done', 'active']
  return (
    <div>
      {filterButtons.map((item) => (
        <button
          style={{ background: filter === item ? 'green' : 'grey' }}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
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

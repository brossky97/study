import type { ChangeEvent } from 'react'
import useTaks from './useTaks' // зайвий імпорт

export default function Form({ addTask, form, setForm, setFilter, filter }) {
  // відсутні типи наглухо - Typescript придумали для типів. Props Drilling, парашно.
  const input = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: e.target.value }) // пройобано динамічне ім'я [e.target.name], назва функції-хендлера не по стандарту handle***Change
  }
  const area = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, description: e.target.value }) // пройобано динамічне ім'я [e.target.name], назва функції-хендлера не по стандарту handle***Change
  }
  const filterButtons = ['all', 'done', 'active'] // кожен раз як перемальовується компонент - цей масив перестворюється, їх треба назовні компонентів виносити, бо це константа
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
        {' '}
        {/** 1) Лише одне з двох **/}
        <input
          value={form.title}
          onChange={input} /** 2) Лише одне з двох **/
        />
        <textarea
          value={form.description}
          onChange={area} /** 2) Лише одне з двох **/
        />
        <button>Add</button>{' '}
        {/** дефолтний тип кнопки (type: 'submit'), але ти хендлиш зміну форми через окремі хендлери на onChange і одночасно якогось хуя зробив сабміт хендлер для <form>. Напутав два окремі рішення і жодне не працює повноцінно(КОСТИЛІ) **/}
      </form>
    </div>
  )
}

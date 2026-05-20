export default function Form({ addTask, form, input, area, cantSubmit }) {
  return (
    <form onSubmit={addTask}>
      <input
        value={form.title}
        onChange={input}
      />
      <hr />
      <textarea
        value={form.description}
        onChange={area}
      />
      <hr />
      <button disabled={cantSubmit}>AddTask</button>
    </form>
  )
}

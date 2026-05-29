import List from './List'
import Form from './Form'
import useTaks from './useTaks'

export default function App() {
  const {
    form,
    setForm,
    addTask,
    deleteTask,
    toggleTask,
    setFilter,
    visibleTasks,
    filter,
  } = useTaks() // Коментуючи цю залупу - це пізда. Все в одному файлі і насрано
  // В цьому компоненті впринципі пізда, порушенні основні правила реактивності і розділення коду. Насрано всім зразу. PROPS DRILLING, BROKEN SINGLE RESPONSIBILITY
  return (
    <div>
      <h1>ToDo</h1>
      <Form
        filter={filter}
        form={form}
        setForm={setForm}
        addTask={addTask}
        setFilter={setFilter}
      />
      <List
        tasks={visibleTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  )
}

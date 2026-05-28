import List from './List'
import Form from './Form'
import useTaks from './useTaks'

export default function App() {
  const { form, setForm, addTask, deleteTask, toggleTask, setFilter, visibleTasks, filter } =
    useTaks()

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

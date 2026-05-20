import List from './ListItems'
import Form from './FormList'
import useTasks from './useTaks'

export default function App() {
  const { addTask, form, area, input, cantSubmit, tasks, deleteTask, toggleTask } = useTasks()
  return (
    <div>
      <h1>ToDo</h1>
      <Form
        addTask={addTask}
        form={form}
        area={area}
        input={input}
        cantSubmit={cantSubmit}
      />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  )
}

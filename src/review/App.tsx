import { List } from './List'
import { Form } from './Form'
import { Filters } from './Filters'

export default function App() {
  return (
    <div>
      <h1>ToDo</h1>
      <Form />
      <Filters />
      <List />
    </div>
  )
}

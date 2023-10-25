import Image from 'next/image'

export default function Home() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div className="root">
      <TodosContext.Provider value={{ todos }}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </TodosContext.Provider>
    </div>
  )
}

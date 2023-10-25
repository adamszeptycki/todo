export const TodoList = () => {
    const { todos, setTodos } = React.useContext(TodosContext);
    return (
        <ul>
            {todos.map(t => t.done ? <li key={t.id} className="done">{t.text}</li> : <li key={t.id}>{t.text}</li>)}
        </ul>
    )
}
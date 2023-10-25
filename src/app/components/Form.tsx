import * as React from 'react';

export const TodoForm = () => {
    const { todos, setTodos } = React.useContext(TodosContext);
    const [task, setTask] = React.useState('');

    const handleAddTodo = () => {
        // Fin an ability to add new task
    };

    const handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            handleAddTodo();
        }
    };

    return (
        <div >
            <input
                placeholder="Enter new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <button type="button" onClick={handleAddTodo}>
                Add task
            </button>
        </div>
    );
};

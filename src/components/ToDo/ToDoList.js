import './ToDoLists.css';

const ToDoList = props => {
    return (
        <div className="todo">
            <ul>
                {
                    props.todo.map((todo) => {
                        return (
                            <li key={todo.id} className={todo.priority}>
                                {todo.title} (Priority - {todo.priority})
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;
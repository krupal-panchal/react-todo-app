import Card from "../UI/Card";
import classes from './ToDoList.module.css';

const ToDoList = props => {
    return (
        <Card className={classes.todo}>
            <ul>
                {
                    props.todo.map((user) => {
                        return (
                            <li key={user.id}>
                                {user.name} ({user.age})
                            </li>
                        )
                    })
                }
            </ul>
        </Card>
    );
}

export default ToDoList;
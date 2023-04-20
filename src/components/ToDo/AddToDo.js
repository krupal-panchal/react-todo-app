import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddToDo.module.css';

const AddToDo = (props) => {

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            title.trim().length === 0
            || priority.trim().length === 0
        ) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Enter a valid Title and Priority (Non-empty).',
                }
            );
            return;
        }

        if ( +priority < 1 ) {
            setError(
                {
                    title: 'Invalid priority',
                    message: 'Priority should be > 0.',
                }
            );
            return;
        }

        props.onAddToDo(title, priority);

        setTitle('');
        setPriority('');

    };

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const priorityHandler = (event) => {
        setPriority(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="name" id="username" value={title} onChange={titleHandler} />
                    <label htmlFor="priority">Priority</label>
                    <input type="number" id="priority" value={priority} onChange={priorityHandler} />
                    <Button type="submit">Add To DO</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddToDo;
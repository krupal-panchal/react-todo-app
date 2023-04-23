import React, { useState } from "react";

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
        ) {
            setError(
                {
                    title: 'Invalid input',
                    message: 'Enter a Title.',
                }
            );
            return;
        }

        if (
            priority.trim().length === 0
        ) {
            setError(
                {
                    title: 'Invalid Priority',
                    message: 'Select a priority from dropdown.',
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
            <Card className={`${classes.input} ${classes.select}`}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="title">Title</label>
                    <input type="name" id="username" value={title} onChange={titleHandler} />
                    <label htmlFor="priority">Priority</label>
                    <select value={priority} onChange={priorityHandler}>
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <Button type="submit">Add To Do</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddToDo;
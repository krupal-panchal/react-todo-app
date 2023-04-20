import { useState } from 'react';
import Header from './components/UI/Header';
import AddToDo from './components/ToDo/AddToDo';
import ToDoList from './components/ToDo/ToDoList';

function App() {

    const [todoList, setToDoList] = useState([]);

    const addToDoHandler = (name, age) => {
        setToDoList((prevToDosList) => {
            return [
                ...prevToDosList,
                {
                    name: name,
                    age: age,
                    id: Math.random().toString(),
                }
            ];
        });
    };

    return (
        <div className="App">
            <Header />
            <AddToDo onAddToDo={addToDoHandler}/>
            <ToDoList todo={todoList}/>
        </div>
    );
}

export default App;

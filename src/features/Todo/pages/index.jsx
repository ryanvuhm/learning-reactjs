import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const initTodoList = [
        {
            id: 1,
            title: 'Complete exercise 1',
            status: 'new',
        },
        {
            id: 2,
            title: 'Complete exercise 2',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Complete exercise 3',
            status: 'new',
        },
        {
            id: 4,
            title: 'Complete exercise 4',
            status: 'new',
        },
        {
            id: 5,
            title: 'Complete exercise 5',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];
        
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo list</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;
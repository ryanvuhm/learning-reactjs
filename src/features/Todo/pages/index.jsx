import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {

    const todoList = [
        {
            id: 1,
            title: 'Complete exercise 1',
        },
        {
            id: 2,
            title: 'Complete exercise 2',
        },
        {
            id: 3,
            title: 'Complete exercise 3',
        }
    ];

    return (
        <div>
            <h3>Todo list</h3>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;
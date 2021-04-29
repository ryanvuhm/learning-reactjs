import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import queryString from 'query-string';
import { useLocation, useHistory, useRouteMatch } from 'react-router-dom'
import './styles.scss';
TodoFeature.propTypes = {};

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

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params);

        return params.status || 'all ';
    });

    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilterStatus (params.status || 'all');
    }, [location.search])
    
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

    const handleShowAllClick = () => {
        // setFilterStatus('all');
        const queryParams = {status: 'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowNewClick = () => {
        // setFilterStatus('new');
        const queryParams = {status: 'new'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };
    const handleShowCompletedClick = () => {
        // setFilterStatus('completed');
        const queryParams = {status: 'completed'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        });
    };

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    console.log(renderTodoList)
    return (
        <div>
            <h3>Todo list</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick}/>
            <div className = "todo-list__button">
                <button onClick={handleShowAllClick}>All</button>
                <button onClick={handleShowNewClick}>New</button>
                <button onClick={handleShowCompletedClick}>Completed</button>
            </div>
        </div>
    );
}

export default TodoFeature;
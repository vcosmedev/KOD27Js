import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {
    const [task, setTask] = useState(null);
    const [priority, setPriority] = useState('LOW');
    const [taskList, setTaskList] = useState([]);

    const taskHandler = (event) => {
        const value = event.target.value;
        setTask(value);
    };

    const priorityHandler = (event) => {
        const value = event.target.value;
        setPriority(value);
    };

    // Add new task
    const addNewTaskHandler = () => {
        // const newTask = [task];
        const newTask = {
            // id: taskList.length + 1,
            priority: priority,
            task: task,
            done: false,
        };
        setTaskList([...taskList, newTask]);
        setTask('');
    };

    const priorityColorMap = {
        LOW: 'text-info',
        MEDIUM: 'text-warning',
        HIGH: 'text-danger',
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <h1>ToDo List</h1>
                        <ul className='list-group'>
                            {taskList.map((newTask) => {
                                return (
                                    <li className='list-group-item d-flex justify-content-between'>
                                        <p
                                            className={`${
                                                priorityColorMap[
                                                    newTask.priority
                                                ]
                                            } fw-bold`}
                                        >
                                            {[newTask.task]}
                                        </p>
                                        <input
                                            className='form-check-input ms-2'
                                            type='checkbox'
                                            value=''
                                            id='flexCheck'
                                            // onChange
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='col-12 col-md-6'>
                        <h3 className='ms-4'>New ToDo Task</h3>
                        <div className='form-check'>
                            <input
                                className='form-control'
                                type='text'
                                placeholder='New task input'
                                // Set value to clear input field ⤵
                                value={task}
                                onChange={taskHandler}
                            />
                        </div>
                        <h4 className='ms-4 mt-3'>Priority</h4>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priority'
                                id='lowPriority'
                                // Watch out here ⤵
                                value='LOW'
                                checked={priority === 'LOW'}
                                onChange={priorityHandler}
                            />
                            <label
                                className='form-check-label'
                                htmlFor='flexRadioDefault2'
                            >
                                Low
                            </label>
                        </div>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priority'
                                id='mediumPriority'
                                // Watch out here ⤵
                                value='MEDIUM'
                                checked={priority === 'MEDIUM'}
                                onChange={priorityHandler}
                            />
                            <label
                                className='form-check-label'
                                htmlFor='flexRadioDefault1'
                            >
                                Medium
                            </label>
                        </div>
                        <div className='form-check'>
                            <input
                                className='form-check-input'
                                type='radio'
                                name='priority'
                                id='highPriority'
                                // Watch out here ⤵
                                value='HIGH'
                                checked={priority === 'HIGH'}
                                onChange={priorityHandler}
                            />
                            <label
                                className='form-check-label'
                                htmlFor='flexRadioDefault1'
                            >
                                High
                            </label>
                        </div>
                        <button
                            type='button'
                            className='btn btn-primary mt-3 ms-4'
                            onClick={addNewTaskHandler}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;

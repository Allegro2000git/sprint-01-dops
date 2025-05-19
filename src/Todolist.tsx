import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./components/Button";

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (todolistId: number, taskId: string) => void
    changeFilter: (todolistId: number, value: FilterValuesType) => void
    addTask: (todolistId: number, title: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (todolistId: number) => void
    filter: FilterValuesType
    removeAllTasksInOneTodo: (todolistId: number) => void
  }

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            props.addTask(props.id, title)
            setTitle("")
        }
    }

    const addTaskHandler = () => {
        props.addTask(props.id, title)
        setTitle("")
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(props.id, taskId)
    }

    const changeFilterHandler = (filter: FilterValuesType) => {
        props.changeFilter(props.id, filter)
    }

    return <div>
        <h3>
            {props.title}
            <Button title={"X"} onClick={()=>props.removeTodolist(props.id)}/>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={"+"} onClick={addTaskHandler}/>
            <Button title={"removeAllTask"} onClick={()=>props.removeAllTasksInOneTodo(props.id)}/>
            {error && <div className="error-message">{error}</div>}
        </div>
      
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button title={"x"} onClick={()=>removeTaskHandler(t.taskId)}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button classes={props.filter === 'all' ? "active-filter" : ""} title={"All"} onClick={()=>changeFilterHandler("all")}/>
            <Button classes={props.filter === 'active' ? "active-filter" : ""} title={"Active"} onClick={()=>changeFilterHandler("active")}/>
            <Button classes={props.filter === 'completed' ? "active-filter" : ""} title={"Completed"} onClick={()=>changeFilterHandler("completed")}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}



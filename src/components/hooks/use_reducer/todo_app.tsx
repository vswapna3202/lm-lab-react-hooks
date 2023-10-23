import { useReducer } from 'react';
import { AddTask } from './add_task.js';
import { TaskList } from './task_list.js';
//import { act } from 'react-dom/test-utils';

export interface Task {
	id: number;
	text: string;
	done: boolean;
}

const initialTasks: Task[] = [
	{ id: 0, text: 'Visit Kafka Museum', done: true },
	{ id: 1, text: 'Watch a puppet show', done: false },
	{ id: 2, text: 'Lennon Wall pic', done: false },
];

const enum REDUCER_ACTION_TYPE {
	ADD_TASK,
	CHANGE_TASK,
	DELETE_TASK
}

type ReducerAction =
{type: REDUCER_ACTION_TYPE.ADD_TASK, payload:string}
|{type: REDUCER_ACTION_TYPE.CHANGE_TASK , payload: Task}
|{type: REDUCER_ACTION_TYPE.DELETE_TASK, payload: number}


const taskReducer = (
	state : typeof initialTasks, action: ReducerAction) 
	: typeof initialTasks => {		
	switch(action.type){
		case REDUCER_ACTION_TYPE.ADD_TASK:
			return [
				...state,
				{
					id: state.length,
					text: action.payload,
					done: false,
				},
			];
		case REDUCER_ACTION_TYPE.CHANGE_TASK:
			return state.map((t) => 
				(t.id === action.payload.id ? action.payload : t));		
			
		case REDUCER_ACTION_TYPE.DELETE_TASK:			
			return state.filter((t) => t.id !== action.payload);	
		default:
			throw new Error('Error in selecting task');	
	}
}

export function TaskApp() {
	//const [tasks, setTasks] = useState(initialTasks);
	const [tasks, dispatch] = 
		useReducer(taskReducer, initialTasks);

	function handleAddTask(text: string) {
		dispatch({type: REDUCER_ACTION_TYPE.ADD_TASK, payload: text});
		/* 	
		setTasks([
			...tasks,
			{
				id: tasks.length,
				text: text,
				done: false,
			},
		]);*/
	}

	function handleChangeTask(updatedTask: Task) {
		dispatch({type: REDUCER_ACTION_TYPE.CHANGE_TASK, payload: updatedTask});
		/*
		setTasks(
			tasks.map((t) => {
				if (t.id === updatedTask.id) {
					return updatedTask;
				} else {
					return t;
				}
			})
		);*/
	}

	function handleDeleteTask(taskId: number) {
		dispatch({type: REDUCER_ACTION_TYPE.DELETE_TASK, payload: taskId});
		/*
		setTasks(tasks.filter((t) => t.id !== taskId));
		*/
	}

	return (
		<>
			<h2>useReducer</h2>

			<h3>Prague Itinerary</h3>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
}

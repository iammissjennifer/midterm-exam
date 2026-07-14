import axios from 'axios'
import React, { useEffect, useState } from 'react'

function HomePage() {
    const [data, setData] = useState([])
    const [newTask, setNewTask] = useState("")
    const [editId, setEditId] = useState(null)
    const [editText, setEditText] = useState("")

    const baseURL = "https://mt-todolist-backend.onrender.com/todos/9"

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = async () => {
        try {
            const respond = await axios.get(baseURL)
            setData(respond.data)
        } catch (error) {
            console.log(error)
        }
    }

    const addTask = async () => {
        if (newTask.trim() === "") return
        try {
            await axios.post(baseURL, { content: newTask, isCompleted: false })
            setNewTask("")
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    const toggleComplete = async (todo) => {
        try {
            await axios.put(`${baseURL}/${todo.id}`, {
                ...todo,
                isCompleted: !todo.isCompleted
            })
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${baseURL}/${id}`)
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    const startEdit = (todo) => {
        setEditId(todo.id)
        setEditText(todo.content)
    }

    const saveEdit = async (todo) => {
        try {
            await axios.put(`${baseURL}/${todo.id}`, {
                ...todo,
                content: editText
            })
            setEditId(null)
            setEditText("")
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='w-[90%] max-w-xl bg-white shadow-xl mx-auto my-7 p-8 rounded-3xl'>

                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-3xl font-bold'>My Todo</h1>
                    <span className='text-3xl'>🚀</span>
                </div>

                <div className='flex items-center gap-3 mb-4'>
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder='new task'
                        className='flex-1 outline-none text-gray-500 placeholder-gray-400'
                    />
                    <button
                        onClick={addTask}
                        className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full'
                    >
                        Add
                    </button>
                </div>

                <hr className='border-gray-300 mb-4' />

                <div className='flex flex-col gap-4'>
                    {data.map((todo) => (
                        <div key={todo.id} className='flex items-center justify-between'>
                            <div className='flex items-center gap-3 flex-1'>
                                <input
                                    type='checkbox'
                                    checked={todo.isCompleted}
                                    onChange={() => toggleComplete(todo)}
                                    className='w-5 h-5 accent-blue-500'
                                />
                                {editId === todo.id ? (
                                    <input
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className='border-b border-gray-300 outline-none flex-1'
                                    />
                                ) : (
                                    <span className={`text-lg ${todo.isCompleted ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                        {todo.content}
                                    </span>
                                )}
                            </div>

                            <div className='flex items-center gap-3'>
                                {editId === todo.id ? (
                                    <button
                                        onClick={() => saveEdit(todo)}
                                        className='bg-green-100 hover:bg-green-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium'
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => startEdit(todo)}
                                        className='bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium'
                                    >
                                        Edit ✏️
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteTask(todo.id)}
                                    className='text-gray-500 hover:text-red-500 font-bold text-lg'
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default HomePage
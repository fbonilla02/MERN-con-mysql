import axios from 'axios'

export const getTasksRequest = async () =>
    await axios.get('https://mern-con-mysql-production.up.railway.app/tasks/')


export const createTaskRequest = async(task) =>
    await axios.post('https://mern-con-mysql-production.up.railway.app/tasks', task)

export const deleteTaskRequest = async (id) =>
    await axios.delete(`https://mern-con-mysql-production.up.railway.app/tasks/${id}`)


export const getTaskRequest = async (id) =>
    await axios.get(`https://mern-con-mysql-production.up.railway.app/tasks/${id}`)

export const updateTaskRequest = async (id, newFields) =>
    await axios.put(`https://mern-con-mysql-production.up.railway.app/tasks/${id}`, newFields)

export const toggleTaskDoneRequest = async (id,done)=>
await axios.put(`https://mern-con-mysql-production.up.railway.app/tasks/${id}`, {done})
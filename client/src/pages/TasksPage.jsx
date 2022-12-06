import React, { useEffect } from 'react'

import TaskItem from '../components/TaskItem'
import { useTask } from '../context/TaskContext'

export default function TasksPage() {

  const {tasks, loadTasks} = useTask()

  useEffect(()=>{
    loadTasks();
  }, [])

  function renderMain(){
    if(tasks.length === 0 ) return <h1>No Task y yet</h1>
    return tasks.map(task => (
       <TaskItem task={task} key={task.id}/>
      ))
    
  }

  return ( 
    <section className='bg-bGray  '>
    <h1 className='text-3xl text-center py-5'>Tasks List</h1>
    <div className='flex flex-wrap px-8 gap-4' >
   {renderMain()}
    </div>
    </section>
  )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTask } from '../context/TaskContext.jsx'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FiTrash, FiEdit2} from 'react-icons/fi'
import {VscClose} from 'react-icons/vsc'
import {MdOutlineCheck} from 'react-icons/md'

export default function TaskItem({task}) {
  const {deleteTask, toggleTaskDone} = useTask()
  const Navigate = useNavigate()

  const handleDone = async() =>{
      await toggleTaskDone(task.id)
  }
  const [open, setOpen] = useState(false)
  
  const handleOpen = ()=>{
    setOpen(!open)
  }

  const pattern = /^([^T])+/g;
   const date = task.createAt.match(pattern)
  return (
    <section className="border rounded-lg w-64 pl-3 pr-1  bg-white font-Roboto py-4">
    <div className='flex justify-between'>
      <section className='flex items-center gap-1'>
        {/* <span className='border rounded-full'>{task.done == 1 ? "✔️" : "❌"}</span> */}
        <span onClick={()=> handleDone(task.done)} className='cursor-pointer' >{task.done == 1 ? <MdOutlineCheck className='border rounded-full w-5 h-5 inline-block bg-violet-400 text-white border-violet-400 '/> : <MdOutlineCheck className='border rounded-full w-5 h-5 inline-block text-gray-400'/>}</span>
        <h3 className='inline-block text-lg mt-1 font-bold first-letter:uppercase'>{task.title}</h3>
      </section>
      <div className='relative pr-2'>
      {open ?
        <VscClose className='cursor-pointer' size='20px'  onClick={handleOpen}/>
        :
        <BsThreeDotsVertical className='cursor-pointer'  size='20px' onClick={handleOpen}/>
      }
     {open ? (
      <ul className='absolute right-0 border w-20 bg-white'>
        <li className='bg-white hover:bg-violet-400 hover:text-white'><button className='flex items-center pl-2  w-full h-10 gap-1 ' onClick={()=> Navigate(`/edit/${task.id}`)}><FiEdit2/> Edit</button></li>
        <li className='bg-white hover:bg-violet-400 hover:text-white'> <button className='flex items-center pl-2 w-full h-10 gap-1' onClick={()=> deleteTask(task.id)}><FiTrash className='inline-block '/> Delete</button></li>
      </ul>
     ): null}
     </div>
    </div>
    <p className='my-2 text-sm text-gray-700'>{task.description}</p>
    <span className='float-right pr-2'>{date}</span>
    {/* <div>
     
      <button onClick={()=> handleDone(task.done)}>Toogle Task</button>
    </div> */}
  </section>
  )
}

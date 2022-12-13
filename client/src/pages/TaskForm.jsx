import React, { useEffect, useState } from 'react'
import {Form, Formik} from 'formik'
import { useTask } from '../context/TaskContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
  const {createTask, getTask, updateTask} = useTask()
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const params = useParams()
  const Navigate = useNavigate()
  
  useEffect(()=>{
    const loadTask = async ()=>{
      if(params.id){
        const task = await getTask(params.id)
        console.log(task)
        setTask({
          title: task.title,
          description: task.description,
        })
      }
    }
    loadTask()
  }, [])
  return (
    <div className='bg-bGray px-24  m-auto'>
    <h1 className='text-center py-6 text-2xl'>{params.id ? "Edit Task": "New Task"}</h1>

    <Formik initialValues={task}
    enableReinitialize={true}
    
    onSubmit={async(values, actions)=>{
        console.log(values)
        if(values.title === "" && values.description === ""){
          alert("escribe algo")
        }else{
          if(params.id){
          await updateTask(params.id, values)
          Navigate("/")
        }else{
         await createTask(values)
         alert('se agrego con exito')
         Navigate("/")
        }
        setTask({
          title: "",
          description: "",
        })
        }
        
    }}>
            {({handleChange, handleSubmit, values, isSubmitting})=>(
                    <Form className='flex flex-col ' onSubmit={handleSubmit}>
                <label >Title</label>
                <input className='h-10 my-2 px-2 placeholder:px-2' type="text" name='title'  placeholder='Write a title' onChange={handleChange} value={values.title}/>

                <label>Description</label>
                <textarea className='my-2 px-2 focus:px-2 placeholder:px-2' name="description"  rows="3" placeholder='Write a description'onChange={handleChange} value={values.description}></textarea>
                <button className=' px-5 py-2 m-auto my-5 bg-purple-400 hover:bg-purple-500 text-white font-bold w-fit' type='submit' disabled={isSubmitting}>{isSubmitting ? 'Saving...' : "Save"}</button>
            </Form>
            )}
        </Formik>
    </div>
  )
}

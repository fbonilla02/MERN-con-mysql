import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between px-2 h-12 bg-indigo-900 text-white items-center'>
        <h2 className='text-xl '>React MySQL</h2>
        <ul className='flex gap-5 '>
            <li className='hover:text-gray-300'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:text-gray-300'>
                <Link to="/new">Create task</Link>
            </li>
        </ul>
    </div>
  )
}

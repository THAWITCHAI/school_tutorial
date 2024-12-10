'use client'
import React, { useState } from 'react'

type Props = {}

export default function Home({}: Props) {
  const [student_id,setStudent_id] = useState<string|null>(null)
  const [student_password,setStudent_password] = useState<string|null>(null)
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4'>
      <form method='POST' className='w-[20rem] h-fit border bg-sky-500 shadow-sm flex flex-col justify-start items-center gap-2 p-5'>
        <h1 className='text-white text-xl'>เข้าสู่ระบบ</h1>
        <input  onChange={(e)=>setStudent_id(e.target.value)} name='student_id' type="text" className='w-full h-[2.5rem] outline-none border-none px-1.5 text-slate-700 rounded-sm' placeholder='รหัสนักเรียน'/>
        <input  onChange={(e)=>setStudent_password(e.target.value)} name='student_password' type="text" className='w-full h-[2.5rem] outline-none border-none px-1.5 text-slate-700 rounded-sm' placeholder='รหัสผ่าน'/>
        <button disabled={(student_id&&student_password)==null} type='submit' className={`${(student_id&&student_password)!=null?"bg-yellow-500":"bg-yellow-300"} p-2 w-full text-white rounded-sm`}>เข้าสู่ระบบ</button>
      </form>
    </div>
  )
}
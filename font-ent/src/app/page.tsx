import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-4'>
      <form method='POST' className='w-[20rem] h-fit border bg-sky-500 shadow-sm flex flex-col justify-start items-center gap-2 p-5'>
        <h1 className='text-white text-xl'>เข้าสู่ระบบ</h1>
        <input name='student_id' type="text" className='w-full h-[2.5rem] outline-none border-none px-1.5 text-slate-700 rounded-sm' placeholder='รหัสนักเรียน'/>
        <input name='student_id' type="text" className='w-full h-[2.5rem] outline-none border-none px-1.5 text-slate-700 rounded-sm' placeholder='รหัสผ่าน'/>
        <button type='submit' className='bg-yellow-500 p-2 w-full text-white rounded-sm'>เข้าสู่ระบบ</button>
      </form>
    </div>
  )
}
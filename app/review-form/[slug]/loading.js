import React from 'react'

export default function loading() {
  return (
    <section>
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex gap-3 justify-center items-center'>
                <img src="/loading.gif" alt="loader" className='w-16' />
                <p className='text-2xl'>Loading please wait....</p>
            </div>
        </div>
    </section>
  )
}

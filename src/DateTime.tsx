import React from 'react'

const DateTime = () => {
    
    const showdate = new Date()
    const dt=showdate.toDateString()
    

    
    
    return (
    <div className='text-org text-xl font-bold ml-10'>{dt}</div>
  )
}

export default DateTime
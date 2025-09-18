import React, { useEffect, useState } from 'react'
import Subservices from './Subservices'

export default function Services() {
    const [user, setuser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setuser(data))
    }, [])
    return (
        <div className='mt-30'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold text-xl'>Service</p>
                <h1 className='font-bold text-5xl'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
                <div className='grid grid-cols-3 gap-4 mt-20 mb-30'>
                    {
                        user.map(data => <Subservices data={data}></Subservices>)
                    }
                </div>
            </div>
        </div>
    )
}

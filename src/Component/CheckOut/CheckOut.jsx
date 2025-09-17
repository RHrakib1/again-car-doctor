import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CheckOut() {
    const { id } = useParams()
    // const loadata = useLoaderData()
    // console.log(loadata, 'this a data')
    // const { title, price, service_id } = loadata
    fetch(`http://localhost:5000/services/68cab7453da1b0578525ffc3`)
        .then(res => res.json())
        .then(data => console.log(data))
    return (
        <div>
            {/* <h1>Booking Value:{service_id}</h1> */}
            <h1 className='text-3xl'>Name of the service: {title}</h1>
        </div>
    )
}

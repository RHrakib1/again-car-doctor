import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CheckOut() {

    const loaddata = useLoaderData()
    return (
        <div>
            {/* <h1>Booking Value:{service_id}</h1> */}
            <h1 className='text-3xl'>Name of the service: {loaddata.title}</h1>
        </div>
    )
}

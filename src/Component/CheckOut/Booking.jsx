import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Authentication/AuthProvider/Authprovider'
import Subbook from './Subbook'

export default function Booking() {
    const { userdata } = useContext(AuthContext)
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        if (userdata?.email) {
            fetch(`http://localhost:5000/booking?email=${userdata.email}`)
                .then(res => res.json())
                .then(data => setbookings(data))
        }
    }, [userdata])

    const handleDelete = id => {
        fetch(`http://localhost:5000/booking/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = bookings.filter(b => b._id !== id)
                    setbookings(remaining)
                }
            })
    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updatedBookings = bookings.map(item =>
                        item._id === id ? { ...item, status: 'confirm' } : item
                    )
                    setbookings(updatedBookings)
                }
            })
    }

    return (
        <div>
            <h1>Booking: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coustomer Name</th>
                            <th>Service Address</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(data => (
                            <Subbook
                                key={data._id}
                                data={data}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

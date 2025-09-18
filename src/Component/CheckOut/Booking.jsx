import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Authentication/AuthProvider/Authprovider'

export default function Booking() {

    const { userdata } = useContext(AuthContext)
    const [bookings, setbookings] = useState([])

    useEffect(() => {
        if (userdata?.email) {
            const url = `http://localhost:5000/booking?email=${userdata.email}`
            fetch(url)
                .then(res => res.json())
                .then(data => setbookings(data))
        }
    }, [userdata])

    return (
        <div>
            <h1>Booking: {bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Coustomer Name</th>
                            <th>Service Address</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {bookings.map((data, index) => (
                            <tr key={index}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={data.service_img}
                                                    alt="Avatar"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-sm opacity-50">{data.CoustomerName}</div>
                                            <div className="font-bold">{data.service}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{data.address}</td>
                                <td>{data.Price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

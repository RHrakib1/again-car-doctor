import React, { useContext } from 'react'
import { useLoaderData, useNavigate, } from 'react-router-dom'
import { AuthContext } from '../../Authentication/AuthProvider/Authprovider'
import Swal from 'sweetalert2'

export default function CheckOut() {

    const loaddata = useLoaderData()

    const { userdata } = useContext(AuthContext)
    const navigate = useNavigate();


    const handlecheckout = e => {
        e.preventDefault()
        const shortdata = e.target
        const name = shortdata.name.value
        const date = shortdata.date.value
        const email = userdata?.email
        const price = loaddata.price
        const address = shortdata.address.value
        const order = {
            CoustomerName: name,
            date,
            email,
            address,
            Price: price,
            service_id: loaddata._id,
            service: loaddata.title,
            service_img: loaddata.img
        }
        console.log(order)

        fetch(`http://localhost:5000/booking/`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "add cart",
                        text: "You added to cart",
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "added"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/booking')
                        }
                    });
                }
                console.log(data)

            })



    }
    return (
        <div>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800 mt-2">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y dark:divide-gray-300">
                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={loaddata.img} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">Polaroid camera</h3>
                                        <p className="text-sm dark:text-gray-600">Classic</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">{loaddata.price}$</p>
                                        <p className="text-sm line-through dark:text-gray-400">75.50$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="space-y-1 text-right">
                    <p>Total amount:
                        <span className="font-semibold">{loaddata.price}$</span>
                    </p>
                    <p className="text-sm dark:text-gray-600">Not including taxes and shipping costs</p>
                </div>
            </div>
            <div className="flex flex-col  p-6 rounded-md  sm:p-10 dark:bg-gray-50 dark:text-gray-800 mt-20  mb-20">
                <h1 className='text-4xl font-bold text-center mb-10'>Booking Now</h1>
                <form onSubmit={handlecheckout} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                            <input type="text" name="name" id="name" defaultValue={userdata?.displayName} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="date" className="text-sm">Date</label>
                            <input type="date" name="date" id="date" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input type="text" name="price" id="price" defaultValue={`$${loaddata.price}`} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>

                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" defaultValue={userdata?.email} className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Address</label>
                            <textarea name="address" id="" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"></textarea>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-[#FF3811] dark:text-gray-50">Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

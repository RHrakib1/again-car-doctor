import React from 'react'
import { useLoaderData, } from 'react-router-dom'

export default function CheckOut() {

    const loaddata = useLoaderData()
    return (
        <div>
<<<<<<< HEAD
            <h1>Booking Value:{loaddata.service_id}</h1>
            <h1 className='text-3xl'>Name of the service: {loaddata.title}</h1>
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
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
            <div className="flex flex-col  p-6 rounded-md md:p-20 sm:p-10 dark:bg-gray-50 dark:text-gray-800 mt-20  mb-20">
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                        <div>
                            {/* <label htmlFor="email" className="block mb-2 text-sm">Email address</label> */}
                            <input type="text" name="firstName" id="firstName" placeholder="First Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            {/* <label htmlFor="password" className="text-sm">Password</label> */}
                            <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            {/* <label htmlFor="password" className="text-sm">Password</label> */}
                            <input type="tel" name="yourPhone" id="yourPhone" placeholder="Your Phone" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>

                            {/* <label htmlFor="email" className="block mb-2 text-sm">Email address</label> */}
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
=======
            {/* <h1>Booking Value:{service_id}</h1> */}
            <h1 className='text-3xl'>Name of the service: {loaddata.title}</h1>
>>>>>>> 88112f71421549e62735fa903787162ee7e7ff57
        </div>
    )
}

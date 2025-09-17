import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Subservices({ data }) {
    const {_id, title, img, price } = data
    console.log(data,'servicessssssss')
    return (
        <div>
            <Link to={`/checkout/${_id}`}>
                <div className="card bg-base-100 w-96  h-[320px] shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={img}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="p-5 space-y-1.5 items-center text-left">
                        <h2 className="card-title font-bold text-2xl">{title}</h2>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#FF3811] font-semibold text-xl'>Price: {price}</p>
                            <FaArrowRight className='text-[#FF3811]' ></FaArrowRight>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

export default function Subbook({ data, handleUpdate, handleDelete }) {
    const { _id, service_img, Price, address, service, CoustomerName, status } = data

    return (
        <tr>
            <th>
                {status === 'confirm' ? (
                    <span className='text-2xl text-green-500'>Confirm</span>
                ) : (
                    <button onClick={() => handleUpdate(_id)} className='btn text-4xl text-red-500'>
                        Pending..
                    </button>
                )}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={service_img} alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="text-sm opacity-50">{CoustomerName}</div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>{address}</td>
            <td>{Price}</td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn">
                    <MdDeleteOutline className='text-4xl' />
                </button>
            </td>
        </tr>
    )
}

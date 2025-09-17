import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

export default function ImgText() {
    return (
        <div>
            <div className="hero mt-30">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img
                            src={person}
                            className="rounded-lg shadow-2xl w-3/4"
                        />
                        <img
                            src={parts}
                            className="rounded-lg shadow-2xl w-1/2 absolute top-1/2 right-5 border-white border-8   "
                        />
                    </div>
                    <div className=' w-96  '>
                        <p>About Us</p>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

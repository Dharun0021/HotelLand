import React from 'react'
import { LayoutGridDemo } from './Roomscom'

export const Rooms = () => {
    return (
        <section id='rooms'>
            <h2 className='text-yellow-800 text-5xl font-semibold mt-5 'style={{ fontFamily: 'Poppins, sans-serif' }} >Luxury Rooms</h2>
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className='text-black text-justify p-4'>
                Step into our stylish living room, where comfort meets elegance. This space is thoughtfully designed with a modern aesthetic, featuring a blend of contemporary furniture and warm decor elements.
                The spacious layout encourages gatherings, while the carefully selected color palette creates a soothing ambiance.
                Large windows flood the room with natural light, showcasing beautiful views and enhancing the inviting atmosphere.
                Enjoy cozy evenings by the fireplace or host lively conversations with friends and family in this versatile space, perfect for relaxation and entertainment.
            </p>
            <div>
                <LayoutGridDemo />
            </div>
        </section>
    )
}

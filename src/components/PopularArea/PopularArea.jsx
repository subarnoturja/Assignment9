import React from 'react';
import area1 from '../../assets/area1.jpg'
import area2 from '../../assets/area2.jpg'
import area3 from '../../assets/area3.jpg'

const PopularArea = () => {
    return (
        <div className='lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20'>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                <div>
                    <h1 data-aos='zoom-in' className='text-red-500'>POPULAR AREAS</h1>
                    <h1 data-aos='zoom-in' className='text-black text-[40px] font-semibold leading-10 mt-4'>
                        Explore most <br /> popular areas
                    </h1>
                </div> 
                <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
                    <div data-aos='zoom-in' data-aos-delay='400'
                    style={{ backgroundImage: `url(${area1})` }}
                    className='h-[400px] bg-cover bg-center rounded-xl'
                    ></div>
                    <div data-aos='zoom-in' data-aos-delay='400'
                    style={{ backgroundImage: `url(${area2})` }}
                    className='h-[400px] bg-cover bg-center rounded-xl'
                    ></div>
                    <div data-aos='zoom-in' data-aos-delay='400'
                    style={{ backgroundImage: `url(${area3})` }}
                    className='h-[400px] bg-cover bg-center rounded-xl'
                    ></div>
                </div>
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6'>
                <div data-aos='slide-up' data-aos-delay='200'
                className='flex justify-center lg:items-center gap-8 w-full'>
                    <h1 className='text-black text-7xl font-semibold'>3K</h1>
                    <h1>ACTIVE <br /> LISTINGS</h1>
                </div>
                <div data-aos='slide-up' data-aos-delay='200'
                className='flex justify-center lg:items-center gap-8 w-full'>
                    <h1 className='text-black text-7xl font-semibold'>4K</h1>
                    <h1>SOLID <br /> LISTINGS</h1>
                </div>
                <div data-aos='slide-up' data-aos-delay='200'
                className='flex justify-center lg:items-center gap-8 w-full'>
                    <h1 className='text-black text-7xl font-semibold'>5K</h1>
                    <h1>CLIENTS <br /> WE'VE SERVED</h1>
                </div>
            </div>
        </div>
    );
};

export default PopularArea;
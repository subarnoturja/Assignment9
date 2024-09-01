import React from 'react';
import aboutImg from '../../assets/about.jpg'


const About = () => {
    return (
        <div className='w-full lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10'>
            <div>
                <img 
                className='rounded-2xl lg:w-[500px] lg:h-[600px]'
                data-aos='zoom-in' src={aboutImg} alt="About Image" />
            </div>
            <div className='flex flex-col justify-center items-start gap-8'>
                <h1 data-aos='zoom-in' 
                className='text-red-500 text-xl'>Who We Are</h1>
                <h1 data-aos='zoom-in' data-aos-delay="200"
                className='text-black text-[40px] font-semibold leading-10'>Creating Homes with Heart and Style</h1>
                <p data-aos='zoom-in' data-aos-delay="400"
                className='text-xl text-gray-600'>We believe in designing more than just living spaces—we create homes where memories are made. Experience the difference with us, where every detail matters.</p>
            </div>
        </div>
    );
};

export default About;
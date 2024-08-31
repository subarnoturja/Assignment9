import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard';

const Properties = () => {
    const properties = useLoaderData()
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center gap-4 mb-20'> 
                <h1 data-aos='zoom-in' className='text-red-500'>PROPERTIES</h1>
                <h1 data-aos='zoom-in' className='text-black text-4xl font-semibold'>Explore The Latest <br /> Residential Properties</h1>
            </div>
            <div data-aos='fade-up' className='lg:px-24 lg:ml-14 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    properties.map(property => (
                        <PropertyCard 
                            key={property.id}
                            property={property}
                        ></PropertyCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Properties;
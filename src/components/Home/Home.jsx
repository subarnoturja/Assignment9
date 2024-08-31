import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import AOS from 'aos';
import About from '../About/About';
import PopularArea from '../PopularArea/PopularArea';

const Home = () => {

    useEffect(()=> {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <PopularArea></PopularArea>
        </div>
    );
};

export default Home;
import React from 'react';

const Hero = () => {
    return (
        <div className="hero" style={{ minHeight: '70vh', backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    This is a basic project created by <a href="https://github.com/alexeiddg/Blossom-Stack" className="text-white">@alexeiddg</a> on GitHub using Vite + React (JSX + SWC). Deploy quickly with DaisyUI components and a Supabase local database.
                </div>
            </div>
        </div>
    );
};

export default Hero;

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in',
            offset: 200, // Animation starts as soon as the element is in the viewport
        });
    }, []);

    return (
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590402494756-10c265b9d736?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold">How To Manage Your Task</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/login"><button className="btn btn-primary">Let’s Explore</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Banner;
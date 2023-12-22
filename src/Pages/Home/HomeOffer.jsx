import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeImg from '../../assets/task-1.png';
import { Link } from 'react-router-dom';
const HomeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in',
      offset: 200,
    });
  }, []);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1'>
        <img src={HomeImg} className="max-w-auto rounded-lg shadow-2xl" />
        </div>
        <div className='flex-1'>
          <h1 className="text-5xl font-bold">Make Your Brand More Visible</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to={'/'}><button className="btn btn-neutral">Learn More</button></Link>
        </div>
      </div>
    </div>

  );
};

export default HomeOffer;
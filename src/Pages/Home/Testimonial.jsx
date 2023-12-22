import memberTwo from '../../assets/member2.png';
import memberThree from '../../assets/member4.png';
const Testimonial = () => {
    return (
        <div className="py-20 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center">Our Customer Review</h1>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">

            <div data-aos="fade-in" data-aos-delay="200" className="bg-base-200 text-black my-20 p-10 shadow-md relative flex mx-auto max-w-[26rem] flex-col rounded-xl  bg-clip-border">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 shadow-none">
                    <img
                        src={memberTwo}
                        alt="tania andrew"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="block text-black font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Taylor swift
                            </h5>
                        </div>
                        <p className="text-black block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                            Frontend Lead @ Youtube
                        </p>
                    </div>
                </div>
                <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        "I really believe this he is one of the best design needs from Creative lim. I use them
                        as a freelancer in my hobby projects for fun! And its really affordable,
                        very humble guys !!!"
                    </p>
                </div>
            </div>   
            <div data-aos="fade-in" data-aos-delay="300" className="text-black bg-base-200 my-20 p-10 shadow-md relative flex mx-auto max-w-[26rem] flex-col rounded-xl bg-clip-border">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img
                        src={memberThree}
                        alt="tania andrew"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="text-black block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Tania Andrew
                            </h5>
                            
                        </div>
                        <p className="text-black block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                            Frontend Lead @ Facebook
                        </p>
                    </div>
                </div>
                <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        "He designed the be website design needs from Creative Sim. I use them
                        as a freelancer in my hobby projects for fun! And its really affordable,
                        very humble guys !!!"
                    </p>
                </div>
            </div>   
            <div data-aos="fade-in" data-aos-delay="400" className=" bg-base-200 my-20 p-10 shadow-md relative flex mx-auto max-w-[26rem] flex-col rounded-xl bg-clip-border">
                <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
                    <img
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        alt="tania andrew"
                        className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                    />
                    <div className="flex w-full flex-col gap-0.5">
                        <div className="flex items-center justify-between">
                            <h5 className="text-black block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Henry Galler
                            </h5>
                        </div>
                        <p className="text-black block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                            Frontend Lead @ Google
                        </p>
                    </div>
                </div>
                <div className="mb-6 p-0">
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        "I found solution to all my design needs from Creative Tim. I use them
                        as a freelancer in my hobby projects for fun! And its really affordable,
                        very humble guys !!!"
                    </p>
                </div>
            </div>   
            
            </div>
            

        </div>
    );
};

export default Testimonial;
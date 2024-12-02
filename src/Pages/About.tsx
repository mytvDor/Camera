import { useEffect } from "react";
import CountUp from "react-countup";
export default function About() {
 
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-white">
    <section className="py-10 relative">
       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
           <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
               <div
                   className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                   <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                       <img className=" rounded-xl object-cover" src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1732293150/swissco/cert/9a6a2e14-8d74-419b-ab47-77cd2ead5f52.png" alt="about Us image" />
                   </div>
                   <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1732293134/swissco/cert/c289a016-c265-4b7b-8606-67c106a7d33d.png"
                       alt="about Us image" />
               </div>
               <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                   <div className="w-full flex-col justify-center items-start gap-8 flex">
                       <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                           <h2
                               className="text-red-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                               Trusted Excellence in Camera Accessories Since 2003</h2>
                           <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            Welcome to SWISSCO Technology (Industries) Pte. Ltd., a leader in camera accessories and power solutions 
                            operating under our renowned trademark, i-Discovery. Established in Singapore, with a substantial presence 
                            in the UAE, we have been dedicated to delivering premium products and customer satisfaction across Southeast 
                            Asia, Asia, the Middle East, South Africa, and Europe for over two decades.</p>
                       </div>
                       {/*  remove Flext and add grid, Animation on counter --------------------------------*/}
                       <div className="w-full grid grid-cols-3 gap-1 text-center">
                            {/* Row 1: Counters */}
                            <div className="flex flex-col items-center justify-center text-gray-900 text-4xl font-bold font-manrope">
                                <CountUp end={20} suffix="+" duration={3.5} />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-900 text-4xl font-bold font-manrope">
                                <CountUp end={100} suffix="+" duration={3.5} />
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-900 text-4xl font-bold font-manrope">
                                <CountUp end={52} suffix="K+" duration={3.5} />
                            </div>

                            {/* Row 2: Text */}
                            <div className="flex flex-col items-center justify-center text-gray-500 text-base font-normal leading-relaxed">
                                Years of Experience
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-500 text-base font-normal leading-relaxed">
                                Products
                            </div>
                            <div className="flex flex-col items-center justify-center text-gray-500 text-base font-normal leading-relaxed">
                                Happy Clients
                            </div>
                        </div>
                   </div>
                   {/* <button
                       className="sm:w-fit w-full px-3.5 py-2 bg-red-600 hover:bg-red-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                       <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                   </button> */}
               </div>
           </div>
       </div>
   </section>
   <section className="py-10 relative xl:mr-0 lg:mr-5 mr-0">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                    <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2 className="text-red-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                The Tale of Our Achievement Story
                            </h2>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                Since 2003, SWISSCO Technology has proudly delivered excellence in camera accessories 
                                and power solutions. From our headquarters in Singapore to a strong presence in the UAE, 
                                our journey has been defined by innovation, quality, and a deep commitment to customer satisfaction.
                            </p>
                        </div>
                    </div>
                    {/*  Animation on counter -------------------------------- */}
                    <div className="w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div className="min-h-[8rem] max-h-[8rem] w-full h-full p-3.5 rounded-xl    transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9"><CountUp end={30} suffix="+" duration={3.5} />  Years</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">
                                    A Legacy in the Camera Industry
                                </p>
                            </div>
                            <div className="min-h-[8rem] max-h-[8rem] p-3.5 rounded-xl    transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9"><CountUp end={20} suffix="+" duration={3.5} />  Countries</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">
                                    Reaching Markets Globally
                                </p>
                            </div>
                        </div>
                        <div className=" min-h-[8rem] max-h-[8rem] justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div className="min-h-[8rem] max-h-[8rem] w-full p-3.5 rounded-xl    transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9"><CountUp end={60} suffix="K+" duration={3.5} />  Customers</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">
                                    Loyalty Built on Quality and Trust
                                </p>
                            </div>
                            <div className=" min-h-[8rem] max-h-[8rem] p-3.5 rounded-xl    transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9"><CountUp end={99} suffix="%" duration={3.5} />  Satisfaction</h4>
                                <p className="text-gray-500 text-base font-normal leading-relaxed">
                                    Our Commitment to Client Happiness
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-30 lg:justify-start justify-center items-start flex">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 border-gray-200 rounded-3xl sm:border  relative">
                    <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1732437027/swissco/product/fafe27fb-077f-4d13-9c41-93050b1bd1d0.png" alt="About Us image" />
                </div>
            </div>
        </div>
    </div>
</section>

<section className="py-5 relative">
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
        <img className="lg:mx-0 mx-auto w-full rounded-3xl object-contain" 
                src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1732556964/swissco/content/c03656b8-3ae2-46f9-a1d9-43f7ff135f9f.png" alt="About Us image" />
           
        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Our Mission
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        At SWISSCO Technology, we believe in harnessing diverse perspectives and strengths to foster environments 
                        where innovation and growth can thrive. Through collaboration, we aim to create a space that encourages 
                        personal development, nurtures achievement, and strengthens our collective future.
                    </p>
                </div>
            </div>
           
        </div>
    </div>
</section>

</div>
  );
}


export default function About() {
 
 

  return (
    <div className="bg-white">
    <section className="py-24 relative">
       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
           <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
               <div
                   className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                   <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                       <img className=" rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image" />
                   </div>
                   <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="https://pagedone.io/asset/uploads/1717741215.png"
                       alt="about Us image" />
               </div>
               <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                   <div className="w-full flex-col justify-center items-start gap-8 flex">
                       <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                           <h2
                               className="text-red-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                               Empowering Each Other to Succeed</h2>
                           <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                               Every project we've undertaken has been a collaborative effort, where every person
                               involved has left their mark. Together, we've not only constructed buildings but also
                               built enduring connections that define our success story.</p>
                       </div>
                       <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                           <div className="flex-col justify-start items-start inline-flex">
                               <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">33+</h3>
                               <h6 className="text-gray-500 text-base font-normal leading-relaxed">Years of Experience</h6>
                           </div>
                           <div className="flex-col justify-start items-start inline-flex">
                               <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">125+</h4>
                               <h6 className="text-gray-500 text-base font-normal leading-relaxed">Successful Projects</h6>
                           </div>
                           <div className="flex-col justify-start items-start inline-flex">
                               <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">52+</h4>
                               <h6 className="text-gray-500 text-base font-normal leading-relaxed">Happy Clients</h6>
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
   <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
           <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
               <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                   <div className="w-full flex-col justify-center items-start gap-8 flex">
                       <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                           {/* <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6> */}
                           <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                               <h2
                                   className="text-red-600 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                   The Tale of Our Achievement Story</h2>
                               <p
                                   className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                   Our achievement story is a testament to teamwork and perseverance. Together, we've
                                   overcome challenges, celebrated victories, and created a narrative of progress and
                                   success.</p>
                           </div>
                       </div>
                       <div className="w-full flex-col justify-center items-start gap-6 flex">
                           <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                               <div
                                   className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                   <p className="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                       Landscapes Together</p>
                               </div>
                               <div
                                   className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                   </h4>
                                   <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                       Through Success</p>
                               </div>
                           </div>
                           <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                               <div
                                   className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                   <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                       Innovation Wins Understanding</p>
                               </div>
                               <div
                                   className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                       Clients</h4>
                                   <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                       Client Satisfaction.</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   {/* <button
                       className="sm:w-fit w-full group px-3.5 py-2 bg-red-50 hover:bg-red-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                       <span
                           className="px-1.5 text-red-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                           More</span>
                       <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                           xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6"
                               stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                   </button> */}
               </div>
               <div className="w-full lg:justify-start justify-center items-start flex">
                   <div
                       className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                       <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                           src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                   </div>
               </div>
           </div>
       </div>
   </section>
   <section className="py-24 relative">
       <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
           <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              
               <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
               <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                   <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                       <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Our Mission</h2>
                       <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                   </div>
                   {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-red-600 hover:bg-red-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                       <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                   </button> */}
               </div>
           </div>
       </div>
   </section>
</div>
  );
}

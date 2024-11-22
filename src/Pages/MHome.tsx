import { Link } from "react-router-dom"
import { Camera, Battery, Eye, Users } from 'lucide-react'
export default function MHome() {

  return (
<div className="bg-white m-1">
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1732273240/swissco/Screenshot_from_2024-11-22_16-30-23_nvorwk.png"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
  <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-100rounded-2xl">
    Elevate Your Photography
    <br className="hidden lg:inline-block" /> with Premium Accessories
  </h1>
  <p className="mb-8 leading-relaxed">
    Discover high-quality camera accessories and power solutions trusted by professionals worldwide. From batteries and chargers to tripods and lights, SWISSCO Technology (Industries) Pte. Ltd. has been enhancing the art of photography since 2003.
  </p>
  <div className="flex justify-center">
  <Link
      to="/products"
      className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-2xl text-lg"
    >
      Explore Products
    </Link>   
    
    <Link
      to="/about"
      className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded-2xl text-lg"
    >
      Learn More
    </Link>
      </div>
</div>

  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">A Legacy of Quality and Innovation</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        With over two decades of industry expertise, SWISSCO Technology (Industries) Pte. Ltd. has become a global leader in camera accessories and power solutions. From trade shows to key partnerships worldwide, we’re proud to have built an exceptional network and to serve our customers with dedication.
      </p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-400 px-4 py-6 rounded-full">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="3em"
            width="3em"
            className="text-red-500 mb-3 inline-block"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M336 176L225.2 304 176 255.8"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z"
            />
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">24+</h2>
          <p className="leading-relaxed">Years of Excellence</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-400 px-4 py-6 rounded-full">
          <svg
            viewBox="0 0 640 512"
            fill="currentColor"
            height="3em"
            width="3em"
            className="text-red-500 mb-3 inline-block"
          >
            <path d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-79.7 12.31-129.8 79.34-131.9 82.24-7.844 10.69-5.531 25.72 5.125 33.57a23.858 23.858 0 0014.19 4.657c7.406 0 14.69-3.375 19.38-9.782.406-.563 40.19-53.91 100.5-63.23 7.457-.961 14.98.67 21.56 4.483L227.2 168.2c-12.4 12.3-20.1 27.9-20.1 46.3 0 17.5 6.812 33.94 19.16 46.29 13.24 12.41 29.64 18.31 47.14 18.31s33.94-6.813 46.31-19.19l11.35-11.35 124.2 100.9c2.312 1.875 2.656 5.251.5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719-1.656.156-4.562.125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6-9.469.813-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3H0v255.6l64 .04c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.438 13.62-1.406 26.41-6.063 37.47-13.5l.906.813c12.03 9.876 27.28 14.41 42.69 12.78 13.19-1.375 25.28-7.032 33.91-15.35 21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76 8.381-8.382c9.375-9.376 9.375-24.57 0-33.94-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8c-6.6 6.7-18.1 6.7-24.7 0-3.312-3.282-5.125-7.657-5.125-12.31 0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03 59.75 9.22 100.2 62.73 100.6 63.29 3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1l-133.9-1zM48 352c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.18 16 16.08c0 8.7-7.25 15.9-16 15.9zm544 0c-8.75 0-16-7.245-16-15.99 0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99c0 8.79-7.2 15.99-16 15.99z" />
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">150+</h2>
          <p className="leading-relaxed">Trade Expos</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-400 px-4 py-6 rounded-full">
        <svg
  fill="none"
  viewBox="0 0 15 15"
  height="3em"
  width="3em"
  className="text-red-500 mb-3 inline-block"
>
  <path
    fill="currentColor"
    fillRule="evenodd"
    d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm1 0a6.502 6.502 0 015.527-6.428L7 1.31v.382l-.724.362a.5.5 0 00-.053.863l1.5 1A.5.5 0 008 4h.5a.5.5 0 00.5-.5V3h.5v.5a.5.5 0 00.146.354l.354.353v.586L9.793 5h-.675l-1.894-.947a.5.5 0 00-.448 0l-.894.447H4.5a.5.5 0 00-.485.379l-.5 2a.5.5 0 00.131.475l1.5 1.5a.5.5 0 00.13.093L6 9.31V10.5a.5.5 0 00.146.354l.354.353V12a.5.5 0 00.053.224l.5 1a.5.5 0 00.447.276h1a.5.5 0 00.416-.223l1-1.5a.5.5 0 00.031-.053l.5-1a.5.5 0 00.053-.224v-.833L11.9 7.8a.5.5 0 00.047-.524L11.81 7h.691a.5.5 0 00.5-.5V6h.826A6.5 6.5 0 111 7.5z"
    clipRule="evenodd"
  />
</svg>

          <h2 className="title-font font-medium text-3xl text-gray-900">15+</h2>
          <p className="leading-relaxed">Cities Worldwide</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-400 px-4 py-6 rounded-full">
        <svg
  viewBox="0 0 858.453 1000"
  fill="currentColor"
  height="3em"
  width="3em"
  className="text-red-500 mb-3 inline-block"
>
  <path
    d="M791.453 350c38.667 92 61 178 67 258s-7 126.667-39 140c-18.667 8-39 7-61-3s-43.667-23.333-65-40-54.333-30.333-99-41c-44.667-10.667-94.333-13.333-149-8-18.667 2.667-32.667 9-42 19-9.333 10-11.333 22.333-6 37 14.667 37.333 30 73.333 46 108 2.667 6.667 10.667 14 24 22s21.333 14.667 24 20c9.333 22.667 2 38-22 46a1347.833 1347.833 0 01-102 40c-20 6.667-38-7.333-54-42-21.333-50.667-40.667-94.667-58-132-4-8-15.333-13.667-34-17s-34-13.667-46-31c-20 6.667-32.667 11.333-38 14-22.667 8-47.333 4-74-12s-44.667-36-54-60c-10.667-21.333-12.333-47.667-5-79s21.667-51.667 43-61c84-34.667 155-70.667 213-108s99.333-71.667 124-103 44.333-62 59-92c14.667-30 23-56 25-78s7-41.667 15-59 20-29.333 36-36c32-13.333 75.333 10 130 70s102 136 142 228m-28 300c5.333-2.667 8.667-15.333 10-38 1.333-22.667-2.333-55.333-11-98s-22.333-85.333-41-128c-18.667-44-41-85-67-123s-48.333-66-67-84-30.667-25.667-36-23c-5.333 2.667-8.667 16.667-10 42-1.333 25.333 2 60.333 10 105s21.333 89 40 133 41.333 83.667 68 119 49.333 60.667 68 76c18.667 15.333 30.667 21.667 36 19"
  />
</svg>


          <h2 className="title-font font-medium text-3xl text-gray-900">1K+</h2>
          <p className="leading-relaxed">Exhibitors</p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* here */}
<section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Step 1 */}
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">1</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <Camera className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Exploration</h2>
              <p className="leading-relaxed">
                Our journey began with bold exploration, venturing into uncharted territories, seeking new ideas, and uncovering fresh perspectives that would shape our mission.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">2</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <Battery className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Innovation</h2>
              <p className="leading-relaxed">
                We took our findings and turned them into real-world innovations. Crafting solutions with passion and purpose, our ideas began to shape the future.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">3</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <Eye className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Discovery</h2>
              <p className="leading-relaxed">
                Through diligent research and hands-on experience, we discovered key insights that propelled us forward, aligning our efforts with impactful outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-red-500 text-white relative z-10 title-font font-medium text-sm">4</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-red-100 text-red-500 rounded-full inline-flex items-center justify-center">
              <Users className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Future Vision</h2>
              <p className="leading-relaxed">
                With a clear path ahead, our vision for the future takes shape. Embracing challenges, we strive to create lasting impact and set new standards.
              </p>
            </div>
          </div>
        </div>

        {/* Company Profile */}
        
      </div>
    </section>

<section className="text-gray-600  body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-col text-center w-full mb-20">
  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Innovative Power Solutions</h1>
  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    Discover our cutting-edge battery and charger products, designed to keep your devices powered wherever you go. From lithium-ion batteries to versatile USB-C chargers, our solutions are built to match modern demands with reliability and performance.
  </p>
</div>

    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="Lithium Ion Camera & Video Battery" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731516836/swissco/Lithium_Lon_Camera_video_Battery_q7orak.webp" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">HIGH-PERFORMANCE POWER</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Lithium Ion Camera & Video Battery</h1>
        <p className="leading-relaxed">
            Designed for photographers and videographers, our Lithium Ion Battery provides reliable, long-lasting power, 
            ensuring you never miss a moment. Trusted for its durability and efficient energy delivery, it's the perfect 
            choice for high-performance shooting.
        </p>
    </div>
</div>

      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="SC308 Duo Battery LCD Charger" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517000/swissco/SC308_Duo_Battery_LCD_Charger_mnwvni.jpg" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">DUAL CHARGING MADE EASY</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">SC308 Duo Battery LCD Charger</h1>
        <p className="leading-relaxed">
            The SC308 Duo Battery LCD Charger offers efficient, dual-port charging with a clear LCD display for real-time 
            battery status. Engineered for versatility, it’s an essential tool for on-the-go professionals who rely on 
            consistent, reliable power for their equipment.
        </p>
    </div>
</div>

      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="ST CP-2L Battery & Charger" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517117/swissco/ST_CP-2L_Battery_Charger_kspkik.jpg" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">COMPACT & RELIABLE POWER</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">ST CP-2L Battery & Charger</h1>
        <p className="leading-relaxed">
            The ST CP-2L Battery & Charger is designed for convenience and performance, providing fast and efficient charging 
            for a wide range of devices. Compact and travel-friendly, it’s an ideal power solution for professionals who 
            need reliability on the go.
        </p>
    </div>
</div>

      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="Uni-App Charger" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517173/swissco/Uni-App_Charger_vlaxhb.jpg" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">UNIVERSAL CHARGING SOLUTION</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Uni-App Charger</h1>
        <p className="leading-relaxed">
            The Uni-App Charger brings universal compatibility and high-speed charging to your devices, making it a 
            versatile addition to any professional’s toolkit. Compact and efficient, it’s built to power up multiple 
            device types, ensuring seamless performance wherever you go.
        </p>
    </div>
</div>

      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="DL608 USB Twin Battery Charger" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517245/swissco/DL608_USB_Twin_Battery_Charger_fsafei.jpg" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">DUAL CHARGING POWER</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">DL608 USB Twin Battery Charger</h1>
        <p className="leading-relaxed">
            The DL608 USB Twin Battery Charger is designed for efficiency and convenience, allowing you to charge 
            two batteries simultaneously via USB. Its compact design makes it ideal for travel, while the fast-charging 
            technology ensures your devices are powered up and ready when you need them most.
        </p>
    </div>
</div>

      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
    <img alt="USB Camera Battery With Type-C Input" className="absolute inset-0 w-full h-full object-cover object-center" 
         src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517321/swissco/USB_Camera_Battery_With_type-C_input_ayrnwk.png" />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-red-500 mb-1">ENHANCED CONNECTIVITY</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">USB Camera Battery with Type-C Input</h1>
        <p className="leading-relaxed">
            Experience seamless charging with the USB Camera Battery featuring a Type-C input. This battery offers 
            rapid charging capabilities, versatile connectivity, and is ideal for photographers needing reliable power 
            on the go. Compact and efficient, it keeps your equipment ready whenever you are.
        </p>
    </div>
</div>

      </div>
    </div>
  </div>
</section>
{/* <div className="mx-[10%]   sm:mx-[10%] mb-10">
    <h1 className="text-[25px]">FAQ</h1>
<AccordionDemo></AccordionDemo>
</div> */}

{/* <section className="bg-red-600 rounded-3xl m-3 text-gray-600 body-font py-24">
  <div className="container mx-auto px-5">
    <h1 className="text-3xl font-medium text-white mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="w-full md:w-1/2 p-4">
        <div className="h-full bg-gray-100 p-8 rounded-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">"Swissco’s products have completely changed our workflow, making everything more efficient and reliable. I would recommend them to anyone looking for top-quality tech solutions."</p>
          <div className="inline-flex items-center">
            // <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full object-cover"/> 
            <div className="pl-4">
              <span className="text-gray-900 font-medium">Holden Caulfield</span>
              <span className="text-gray-500 ml-4 text-sm">UI DEVELOPER</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="h-full bg-gray-100 p-8 rounded-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">"Exceptional design and functionality! Swissco’s chargers and batteries are a game-changer for our media production team."</p>
          <div className="inline-flex items-center">
            // <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full object-cover"/>
            <div className="pl-4">
              <span className="text-gray-900 font-medium">Alper Kamu</span>
              <span className="text-gray-500 ml-4 text-sm">DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


</div>
  );
}

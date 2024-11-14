export default function Products() {
  const products = [
    {
      category: 'HIGH-PERFORMANCE POWER',
      title: 'Lithium Ion Camera & Video Battery',
      description: 'Designed for photographers and videographers, our Lithium Ion Battery provides reliable, long-lasting power, ensuring you never miss a moment. Trusted for its durability and efficient energy delivery, it\'s the perfect choice for high-performance shooting.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731516836/swissco/Lithium_Lon_Camera_video_Battery_q7orak.webp',
      price: 'Contact for Price', // Assuming price info isn't provided
    },
    {
      category: 'DUAL CHARGING MADE EASY',
      title: 'SC308 Duo Battery LCD Charger',
      description: 'The SC308 Duo Battery LCD Charger offers efficient, dual-port charging with a clear LCD display for real-time battery status. Engineered for versatility, it’s an essential tool for on-the-go professionals.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517000/swissco/SC308_Duo_Battery_LCD_Charger_mnwvni.jpg',
      price: 'Contact for Price', 
    },
    {
      category: 'COMPACT & RELIABLE POWER',
      title: 'ST CP-2L Battery & Charger',
      description: 'The ST CP-2L Battery & Charger is designed for convenience and performance, providing fast and efficient charging for a wide range of devices. Compact and travel-friendly, it’s an ideal power solution.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517117/swissco/ST_CP-2L_Battery_Charger_kspkik.jpg',
      price: 'Contact for Price', 
    },
    {
      category: 'UNIVERSAL CHARGING SOLUTION',
      title: 'Uni-App Charger',
      description: 'The Uni-App Charger brings universal compatibility and high-speed charging to your devices, making it a versatile addition to any professional’s toolkit.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517173/swissco/Uni-App_Charger_vlaxhb.jpg',
      price: 'Contact for Price', 
    },
    {
      category: 'DUAL CHARGING POWER',
      title: 'DL608 USB Twin Battery Charger',
      description: 'The DL608 USB Twin Battery Charger is designed for efficiency and convenience, allowing you to charge two batteries simultaneously via USB. Its compact design makes it ideal for travel.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517245/swissco/DL608_USB_Twin_Battery_Charger_fsafei.jpg',
      price: 'Contact for Price',
    },
    {
      category: 'ENHANCED CONNECTIVITY',
      title: 'USB Camera Battery with Type-C Input',
      description: 'Experience seamless charging with the USB Camera Battery featuring a Type-C input. Ideal for photographers needing reliable power on the go.',
      imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731517321/swissco/USB_Camera_Battery_With_type-C_input_ayrnwk.png',
      price: 'Contact for Price',
    }
  ];

  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
        <h1 className='ml-20 mt-14 text-5xl text-red-600 font-bold '>Our Products</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-72 rounded overflow-hidden">
                  <img alt={product.title} className="object-cover object-center w-full h-full block" src={product.imgSrc} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-900 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-red-600 title-font text-2xl font-bold">{product.title}</h2>
                  <p className="mt-1">{product.description}</p>
                  <p className="mt-1 font-bold text-lg">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

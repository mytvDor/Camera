
export default function Products() {
 
  const products = [
    { category: 'CATEGORY', title: 'The Catalyzer', price: '$16.00', imgSrc: 'https://dummyimage.com/420x260' },
    { category: 'CATEGORY', title: 'Shooting Stars', price: '$21.15', imgSrc: 'https://dummyimage.com/421x261' },
    { category: 'CATEGORY', title: 'Neptune', price: '$12.00', imgSrc: 'https://dummyimage.com/422x262' },
    { category: 'CATEGORY', title: 'The 400 Blows', price: '$18.40', imgSrc: 'https://dummyimage.com/423x263' },
    { category: 'CATEGORY', title: 'The Catalyzer', price: '$16.00', imgSrc: 'https://dummyimage.com/424x264' },
    { category: 'CATEGORY', title: 'Shooting Stars', price: '$21.15', imgSrc: 'https://dummyimage.com/425x265' },
    { category: 'CATEGORY', title: 'Neptune', price: '$12.00', imgSrc: 'https://dummyimage.com/427x267' },
    { category: 'CATEGORY', title: 'The 400 Blows', price: '$18.40', imgSrc: 'https://dummyimage.com/428x268' }
  ];
  return (
    <div className="bg-white">
      <section className="text-gray-600 body-font">
      <h1 className='ml-20 mt-14 text-5xl text-red-600 font-bold '>Our Products</h1>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                <a className="block relative h-72 rounded overflow-hidden"> {/* Increased height here */}
                  <img alt={product.title} className="object-cover object-center w-full h-full block" src={product.imgSrc} />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-900 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-red-600 title-font text-2xl font-bold">{product.title}</h2>
                  <p className="mt-1 font-bold text-lg">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

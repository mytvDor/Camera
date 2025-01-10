import { MapPin } from 'lucide-react';
import Slider from '@/Comps/Slider';
import '../App.css'
import { useEffect, useState } from 'react';
export default function Events() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const events = [
    {
      id: 1,
      date: 'December 20-22',
      time: '9 am',
      title: 'Photography Videography Digital imaging Expo',
      description: `india Photo Fair - India's photography and videography
market is witnessing rapid growth, driven
by smartphone penetration, social media,
and the rising demand for digital content.
Platforms like YouTube and Instagram,
along with the booming wedding and
event i nd ustry, have fuelled invest rnents
in
high-quality
equipment
and
professional services. With a projected
CAGR of 8-10% from 2024 to 2028, the
industry is set to expand further,
supported by OTT platforms and the
entertainment sector.`,
      location: `BOMBAY EXHIBITION CENTRE
NESCO, WESTERN EXPRESS HIGHWAY
OREGAON EAST, MUMBAI, INDIA`,
      image: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1732287129/swissco/events/43baa1ee-3579-46e1-ada8-d5d6d19a497f.png',
      sm_image: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1733115302/swissco/events/39084542-b1c2-4ed3-9238-302d560abd33.png',
      logo: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1731481769/swissco/Swissco_boljbq.png'
    },
    // {
    //   id: 2,
    //   date: 'Jan 13',
    //   time: '7 pm',
    //   title: '2020 National Championship',
    //   description: 'The College Football Playoff (CFP) determines the national champion of the top division of college football.',
    //   location: 'Mercedes-Benz Superdome',
    //   image: 'https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg',
    //   logo: 'https://collegefootballplayoff.com/images/section_logo.png'
    // },
    // Add more events as needed
  ];

  const handleOpenPdf = () => {
    const pdfUrl = "/Mumbai.pdf"; // Path relative to the public folder
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);

    // Detect small screens
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    const handleMediaQueryChange = () => setIsSmallScreen(mediaQuery.matches);
    handleMediaQueryChange();
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  const openPDF = (pdf:string) => {
    window.open(`/${pdf}.pdf`, '_blank'); // Opens Event1.pdf in a new tab/window
  };
  return (
    <>
    <div className="mx-auto bg-white-200 min-h-screen flex flex-col items-center justify-center px-8 py-8">
      <h1 className="mt-14 text-5xl text-red-600 mb-20 font-bold">Upcoming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="flex flex-col w-full max-w-4xl bg-white rounded-2xl shadow-lg mb-8">
          <div
            className="w-full h-64 bg-top bg-contain bg-no-repeat rounded-t"
            style={{
              backgroundImage: `url(${isSmallScreen ? event.sm_image : event.image})`
            }}
          ></div>

          <div className="flex flex-col w-full md:flex-row">
            {/* Left Section with Date and Time */}
            <div className="flex flex-col items-center justify-center p-4 font-bold text-gray-100 uppercase bg-red-600 rounded md:w-1/4">
              <div className="text-3xl">{event.date.split(' ')[0]}</div>
              <div className="text-6xl">{event.date.split(' ')[1]}</div>
              <div className="text-xl">{event.time}</div>
              <div className="text-m cursor-pointer" onClick={handleOpenPdf}>{`>> More Info <<`}</div>
            </div>

            {/* Right Section with Event Details */}
            <div className="flex flex-col p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-3xl font-bold text-red-600">{event.title}</h1>
              <p className="leading-normal text-gray-700">{event.description}</p>
              <div className="flex items-center mt-4">
                <div className="text-gray-700 flex items-center font-bold">
                  <MapPin className="w-8 h-8 mr-2 text-red-600" />
                  {event.location}
                </div>
                <div className="flex justify-end w-1/2">
                  <img src={event.logo} alt={`${event.title} logo`} className="w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Slider />
    </div>
    {/* <div className="flex flex-col items-center justify-center">
  <iframe
    title="Event 1 PDF"
    className="m-2"
    src="/Event1.pdf"
    style={{ width: '100%', height: '100vh', maxWidth: '800px' }}
  />
  <iframe
    title="Event 2 PDF"
    className="m-2"
    src="/Event2.pdf"
    style={{ width: '100%', height: '100vh', maxWidth: '800px' }}
  />
</div> */}

    {/* <div className="mx-auto bg-white-200 flex flex-col items-center justify-center px-8 py-8">
      <img src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1733115267/swissco/events/f46502ad-c546-4895-b3ff-0222993c1de3.png" alt="" />
    </div> */}
    <div className="mx-auto bg-white flex flex-col items-center justify-center px-8 py-8">
      <img
        src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1733115267/swissco/events/f46502ad-c546-4895-b3ff-0222993c1de3.png"
        alt="Event Image"
        onClick={()=>openPDF("Event1")}
        className="cursor-pointer"
      />
    </div>
    <div className="mx-auto bg-white flex flex-col items-center justify-center px-8 py-8">
      <img
        src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1733115267/swissco/events/f46502ad-c546-4895-b3ff-0222993c1de3.png"
        alt="Event Image"
        onClick={()=>openPDF("Event2")}
        className="cursor-pointer"
      />
    </div>
  </>
  );
}

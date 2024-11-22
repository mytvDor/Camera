import { MapPin } from 'lucide-react';
import Slider from '@/Comps/Slider';

export default function Events() {
 
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
  return (
    <>
    <div className="mx-auto bg-white-200 min-h-screen flex flex-col items-center justify-center px-8 py-8">
     <Slider/>
     <h1 className='ml-20 mt-14 text-5xl text-red-600 mb-20 font-bold '>Upcomming Events</h1>

      {events.map((event) => (
        <div key={event.id} className="flex flex-col w-full max-w-4xl bg-white rounded-2xl shadow-lg mb-8">
          <div
            className="w-full h-64 bg-top bg-cover rounded-t"
            style={{ backgroundImage: `url(${event.image})` }}
          ></div>
          <div className="flex flex-col w-full md:flex-row">
            {/* Left Section with Date and Time */}
            <div className="flex flex-col items-center justify-center p-4 font-bold text-gray-100 uppercase bg-red-600 rounded md:w-1/4">
              <div className="text-3xl">{event.date.split(' ')[0]}</div>
              <div className="text-6xl">{event.date.split(' ')[1]}</div>
              <div className="text-xl">{event.time}</div>
            </div>

            {/* Right Section with Event Details */}
            <div className="flex flex-col p-4 font-normal text-gray-800 md:w-3/4">
              <h1 className="mb-4 text-3xl font-bold text-red-600">{event.title}</h1>
              <p className="leading-normal text-gray-700">{event.description}</p>
              <div className="flex items-center mt-4">
                <div className="text-gray-700 flex items-center ">      <MapPin className="w-8 h-8 mr-2 text-red-600" />{event.location}</div>
                <div className="flex justify-end w-1/2">
                  <img src={event.logo} alt={`${event.title} logo`} className="w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
    </>
  );
}

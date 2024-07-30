import React from 'react';
import { RxDragHandleDots1 } from 'react-icons/rx';
import bgImage from '../assets/background.png';

const Features: React.FC = () => {
  return (
    <>
      <section className="bg-[#ebf0ea] pb-20 py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className='flex items-baseline relative mb-8 md:mb-0'>
            <h2 className="absolute md:relative -top-20 md:top-0 md:w-[20%] text-2xl md:text-4xl font-bold text-center mb-10">Our <span className='block font-findel'> Services</span></h2>
            <p className='md:w-[60%] text-green-800'>Morning Desk's AI chatbots streamline operations, enhance customer engagement, and provide 24/7 support, driving efficiency and business growth.</p>
            <RxDragHandleDots1 className='absolute right-0 -top-20 md:top-0 w-40 h-20 rotate-90 text-green-800' />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="relative flex flex-col items-center rounded-3xl text-white p-4">
              <img src={bgImage} className='absolute top-0 left-0 w-full h-full rounded-3xl blur-[2px]' />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='p-4 z-50'>
                <h3 className='text-3xl font-bold mb-4'>Appointment Scheduling Automation</h3>
                <ul className='list-disc p-2'>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Description: </span>Develop chatbots that handle appointment bookings, reminders, and cancellations, integrated with calendar systems for real-time scheduling.</p>
                  </li>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Benefits: </span>Improved scheduling efficiency, reduced no-show rates, and enhanced customer convenience with 24/7 booking capabilities.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative flex flex-col items-center rounded-3xl text-white p-4 shadow-xl">
              <img src={'https://img.freepik.com/free-vector/fuchsia-silk-draped-fabric-background_33099-1667.jpg?t=st=1719668461~exp=1719672061~hmac=afb0e7c9b37cb8e880833af053fc4854ba870b33e7b18ad2c2962a5f8df454de&w=1060'} className='absolute top-0 left-0 w-full h-full rounded-3xl blur-[2px]' />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='p-4 z-50'>
                <h3 className='text-3xl font-bold mb-4'>Customer Support Automation</h3>
                <ul className='list-disc p-2'>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Description: </span>Automate customer support processes using AI-powered chatbots that handle common queries, manage FAQs, and provide ticketing and live chat services.</p>
                  </li>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Benefits: </span>24/7 support availability, reduced workload for human agents, faster response times, and improved customer satisfaction.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative flex flex-col items-center rounded-3xl text-white p-4 shadow-xl">
              <img src={'https://img.freepik.com/free-vector/realistic-glossy-black-background_23-2150069283.jpg?t=st=1719666824~exp=1719670424~hmac=518e6a33fe94ec93b07fe18f44f06a90ae7d890d54408c5d360fa1efb6f17bdd&w=1060'} className='absolute top-0 left-0 w-full h-full rounded-3xl blur-[2px]' />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='p-4 z-50'>
                <h3 className='text-3xl font-bold mb-4'>Sales and Lead Generation Automation</h3>
                <ul className='list-disc p-2'>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Description: </span>Implement chatbots to qualify leads, capture customer information, and assist in the sales process by providing product recommendations, answering questions, and following up with potential customers.
                    </p>
                  </li>
                  <li>
                    <p className='mb-2'> <span className='font-semibold'>Benefits: </span>Streamlined sales process, higher lead conversion rates, and personalized customer interactions that drive sales growth.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

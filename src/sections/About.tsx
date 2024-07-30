import { RxDragHandleDots1 } from "react-icons/rx";
import bgImage from '../assets/background.png';
import splashImage from '../assets/splash.png';

export default function About() {
  return (
    <>
      <section className="bg-[#ebf0ea] pb-20 py-28 md:py-36 overflow-hidden">
        <div className="container mx-auto px-4 relative">
        <img className='hidden md:absolute -top-72 -left-80 h-96' src={splashImage}/>
          <div className='flex items-baseline relative'>
            <h2 className="absolute md:relative -top-28 md:top-0 md:w-[20%] text-3xl md:text-4xl font-bold text-center mb-10">Know <span className='block font-findel'> About Us</span></h2>
            <p className='w-[80%] md:w-[60%] text-green-800'>Morning Desk leverages AI to streamline operations with innovative chatbot solutions, prioritizing efficiency and exceptional customer experiences.</p>
            <RxDragHandleDots1 className='absolute right-0 -top-28 md:top-0 w-40 h-20 rotate-90 text-green-800' />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="relative flex flex-col items-center rounded-3xl text-white p-4 shadow-xl">
              <img className="absolute h-full w-full left-0 top-0 rounded-3xl blur-[2px]" src={bgImage} />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='z-50'>
                <h3 className='text-3xl font-bold mb-4'>Our
                  Mission</h3>
                <p className='mb-2'>To revolutionize business operations globally through advanced AI technologies, empowering organizations to achieve efficiency, scalability, and exceptional customer experiences.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative flex flex-col items-center rounded-3xl text-white p-4 shadow-xl">
            <img className="absolute h-full w-full left-0 top-0 rounded-3xl blur-[2px]" src={'https://img.freepik.com/free-vector/emerald-background-design_23-2150317701.jpg?t=st=1719668533~exp=1719672133~hmac=89714647d30f19dffd2689341835bf5c30b589199acce9fc8d5d379af47a2a28&w=1060'} />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='z-50'>
                <h3 className='text-3xl font-bold mb-4'>Our
                  Vision</h3>
                <p className='mb-2'>To be the leading provider of AI-powered solutions, transforming how businesses interact, automate tasks, and innovate for sustainable growth.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="relative flex flex-col h-80 items-center rounded-3xl text-white p-4 shadow-xl">
            <img className="absolute h-full w-full left-0 top-0 rounded-3xl blur-[2px]" src={'https://img.freepik.com/free-vector/swirl-fabric-silk-backdrop-luxurious-vinous-drapery-folded-textile-with-soft-spiral-vortex-satin-waves_33099-1542.jpg?t=st=1719667802~exp=1719671402~hmac=b684516ee3ab66b646abd3a8b4dc577f29a01f1dd5c4791f101930da372f8f4b&w=1380'} />
              <div className='w-full h-full bg-black absolute top-0 rounded-3xl opacity-55' />
              <div className='z-50'>
                <h3 className='text-3xl font-bold mb-4'>Our
                  Values</h3>
                <p className='mb-2'><span className="font-semibold">Innovation</span>: Cutting-edge AI for business needs.
                  Customer <br />
                  <span className="font-semibold">Focus</span>: Tailored, efficient solutions.<br />
                  <span className="font-semibold">Integrity</span>: Transparency and ethics.<br />
                  <span className="font-semibold">Collaboration</span>: Driving mutual success.<br />
                  <span className="font-semibold">Excellence</span>: Quality and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
import { RxDragHandleDots1 } from "react-icons/rx";
import bgImage from '../assets/background.png';

export default function Blog() {
    return (
        <>
            <section className="pb-10 pt-5">
                <div className="container mx-auto px-4 py-16 md:py-0 relative">
                    <div className='flex gap-x-4 items-center md:items-baseline mb-4 relative'>
                        <h2 className="absolute md:relative -top-20 md:top-0 md:w-[20%] text-3xl md:text-4xl font-bold text-center mb-10">Our <span className='block font-findel'>BLOGS</span></h2>
                        <p className='w-[80%] md:w-[60%] text-green-800'>Morning Desk leverages AI to streamline operations with innovative chatbot solutions, prioritizing efficiency and exceptional customer experiences.</p>
                        <RxDragHandleDots1 className='absolute right-0 -top-20 md:top-0 w-40 h-20 rotate-90 text-green-800' />
                    </div>
                    <div className="px-4">
                        {/* Feature 1 */}
                        <div className="flex flex-col md:flex-row gap-x-4 items-center rounded-xl border border-black mb-4">
                            <img className="md:h-40 md:w-40 w-full rounded-xl mb-2 md:mb-0" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-2xl md:text-3xl md:text-start font-bold md:mb-4 px-2 md:p-0'>The Rise of AI in Customer Service: Transforming Support with Chatbots</h3>
                                <p className='mb-2 p-2 md:p-0'>Explore how AI-powered chatbots are reshaping customer service by enhancing response times, personalizing interactions, and improving overall customer satisfaction.</p>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="flex flex-col md:flex-row gap-x-4 items-center rounded-xl border border-black mb-4">
                            <img className="md:h-40 md:w-40 w-full rounded-xl mb-2 md:mb-0" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-2xl md:text-3xl md:text-start font-bold md:mb-4 px-2 md:p-0'>Streamlining Business Operations: Automating Appointment Scheduling with Chatbots</h3>
                                <p className='mb-2 p-2 md:p-0'>Discover the benefits of using chatbots to automate appointment scheduling processes, reducing administrative overhead, minimizing no-shows, and improving efficiency.</p>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="flex flex-col md:flex-row gap-x-4 items-center rounded-xl border border-black mb-4">
                            <img className="md:h-40 md:w-40 w-full rounded-xl mb-2 md:mb-0" src={bgImage} alt="Post Image" />
                            <div>
                                <h3 className='text-2xl md:text-3xl md:text-start font-bold md:mb-4 px-2 md:p-0'>Chatbots in E-commerce: Enhancing Sales and Customer Experience Online</h3>
                                <p className='mb-2 p-2 md:p-0'>Learn how integrating chatbots into e-commerce platforms can boost sales by providing personalized product recommendations, answering customer queries instantly, and ...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
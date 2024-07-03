import paperplane from '../assets/paper_plane.jpg'
import bot from '../assets/bot.jpg'

export default function Contact() {
  
    return (
        <section className="relative px-6 lg:px-24 py-12">
            <h1 className="text-6xl lg:text-8xl font-extralight mb-4 text-center">Get In Touch</h1>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
            <img className='hidden md:block w-1/2 object-cover' src={bot} alt="Paper Plane" />
            <a href='https://calendly.com/morningdesk/meeting' target='_blank' className='md:absolute md:left-[28rem] md:bottom-44 bg-orange-300 text-black p-4 shadow-lg hover:shadow-xl'>Connect with me</a>
            <div className='hidden md:block md:absolute md:left-[38rem] bottom-44 md:h-[3.5rem] w-10 md:w-5 bg-orange-200 border' />
            <img className='w-1/2 object-cover' src={paperplane} alt="Paper Plane" />
            </div>
        </section>
    );
}
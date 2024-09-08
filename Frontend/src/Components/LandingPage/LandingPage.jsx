import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import { AiOutlineArrowRight } from 'react-icons/ai';
import home1 from './home1.png';

const LandingPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  const staggeredVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const contactVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
  };

  return (
    <>
      <Helmet>
        <title>BloodBank - Save Lives</title>
        <meta name="description" content="Join our mission to help those in need by donating blood." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white overflow-hidden relative">
        
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row justify-center items-center px-4 pt-24 md:px-8 md:pt-0 overflow-hidden">
          {/* Background Bubbles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Background bubbles */}
            <motion.div
              className="absolute w-24 h-24 bg-white rounded-full opacity-20"
              style={{ top: '10%', left: '20%' }}
              animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-32 h-32 bg-white rounded-full opacity-30"
              style={{ top: '50%', right: '30%' }}
              animate={{ y: [0, -40, 0], x: [0, -40, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-20 h-20 bg-white rounded-full opacity-25"
              style={{ bottom: '20%', left: '50%' }}
              animate={{ y: [0, 30, 0], x: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute w-28 h-28 bg-white rounded-full opacity-20"
              style={{ top: '70%', left: '10%' }}
              animate={{ y: [0, -50, 0], x: [0, -50, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Left-Side Text */}
          <motion.div
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="text-center md:text-left md:w-1/2 px-4 md:px-0"
          >
            <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8">
              Save a Life, <br /> Donate Blood
            </motion.h1>
            <motion.p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-10">
              Join our mission to help those in need by becoming a blood donor today!
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 px-6 py-3 rounded-full text-lg hover:bg-red-700 transition"
            >
              Donate Now <AiOutlineArrowRight className="inline ml-2" />
            </motion.button>
          </motion.div>

          {/* Right-Side Image */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <img 
              src={home1} 
              alt="Donate Blood" 
              className="w-full h-auto object-contain md:w-2/3 rounded-lg"
            />
          </motion.div>
        </section>

        {/* Info Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-16 px-4 md:px-8" ref={infoRef}>
          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            animate={infoInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div
              variants={childVariants}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
              <p>
                Donating blood is one of the easiest ways to make a big impact in someone’s life. Your donation can save up to three lives!
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Who Needs Blood?</h2>
              <p>
                Accident victims, cancer patients, and many others depend on blood donations every day. Be a hero by donating.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-pink-50" ref={featuresRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            className="text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            Our Key Features
          </motion.h2>
          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Easy Registration</h3>
              <p className='text-zinc-600'>
                Quickly sign up to become a blood donor with our streamlined registration process.
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Convenient Locations</h3>
              <p className='text-zinc-600'>
                Find a nearby donation center or mobile unit to make donating easier than ever.
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">Flexible Scheduling</h3>
              <p className='text-zinc-600'>
                Choose a time that works best for you to ensure a smooth donation experience.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-8 md:py-16 px-4 md:px-8" ref={testimonialsRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            What Our Donors Say
          </motion.h2>
          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            className="flex flex-col md:flex-row gap-8 overflow-hidden"
          >
            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-6 rounded-lg shadow-lg flex-1"
            >
              <p>
                "Donating blood was a simple way to help those in need. It felt great to make a difference!"
              </p>
              <p className="mt-4 font-bold">- Jane Doe</p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-6 rounded-lg shadow-lg flex-1"
            >
              <p>
                "The process was quick and easy, and the staff were very supportive. I’m glad I could contribute."
              </p>
              <p className="mt-4 font-bold">- John Smith</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-pink-100" ref={ctaRef}>
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            className="text-center bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Join our community of heroes and start your donation journey today.
            </p>
            <a 
              href="/donate" 
              className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition"
            >
              Donate Now
            </a>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-50" ref={contactRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800"
          >
            Get in Touch
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  className="w-full p-3 border border-gray-300 rounded-lg" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default LandingPage;

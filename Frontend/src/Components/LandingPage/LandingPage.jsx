import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import { AiOutlineArrowRight } from 'react-icons/ai';
import home1 from './home1.png'

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
        <section className="relative min-h-screen flex flex-col md:flex-row justify-center items-center px-8 pt-24 md:pt-0 overflow-hidden">
          {/* Background Bubbles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
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
            className="md:w-1/2 text-center md:text-left"
          >
            <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-8">
              Save a Life, <br /> Donate Blood
            </motion.h1>
            <motion.p className="text-lg md:text-2xl mb-10">
              Join our mission to help those in need by becoming a blood donor today!
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
              whileTap={{ scale: 0.9 }}
              className="bg-red-600 px-8 py-4 rounded-full text-lg hover:bg-red-700 transition"
            >
              Donate Now <AiOutlineArrowRight className="inline ml-2" />
            </motion.button>
          </motion.div>

          {/* Right-Side Image */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <img 
              src={home1} 
              alt="Donate Blood" 
              className="w-2/4  h-2/5 object-contain md:w-2/3 mb-20 rounded-lg "
            />
          </motion.div>
        </section>

        {/* Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-8" ref={infoRef}>
  <motion.div
    variants={staggeredVariants}
    initial="hidden"
    animate={infoInView ? 'visible' : 'hidden'}
    className="flex flex-col justify-center items-center md:items-start w-full"
  >
    <motion.div
      variants={childVariants}
      className="bg-white flex-col bg-opacity-20 p-8 rounded-lg shadow-lg w-full md:w-11/12 lg:w-10/12 mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Donate Blood?</h2>
      <p className="text-base md:text-lg">
        Donating blood is one of the easiest ways to make a big impact in someone’s life. Your donation can save up to three lives!
      </p>
    </motion.div>
  </motion.div>

  <motion.div
    variants={staggeredVariants}
    initial="hidden"
    animate={infoInView ? 'visible' : 'hidden'}
    className="flex flex-col justify-center items-center md:items-start w-full"
  >
    <motion.div
      variants={childVariants}
      className="bg-white flex-col bg-opacity-20 p-8 pr-10 rounded-lg shadow-lg w-full md:w-11/12 lg:w-10/12 mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Who Needs Blood?</h2>
      <p className="text-base md:text-lg">
        Accident victims, cancer patients, and many others depend on blood donations every day. Be a hero by donating.
      </p>
    </motion.div>
  </motion.div>
</section>

        {/* Features Section */}
        <section className="py-16 px-8 bg-pink-50" ref={featuresRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
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
              className="bg-white text-zinc-950 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Easy Registration</h3>
              <p className='text-zinc-600'>
                Quickly sign up to become a blood donor with our streamlined registration process.
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Convenient Locations</h3>
              <p className='text-zinc-600' >
                Find a nearby donation center with our easy-to-use locator tool.
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="bg-white text-zinc-950 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Impactful Results</h3>
              <p className='text-zinc-600'>
                See how your donation is making a difference through our impact reports.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-8 bg-gray-100" ref={testimonialsRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            What Donors Are Saying
          </motion.h2>
          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            animate={testimonialsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={childVariants} className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4 text-zinc-700">
                "Donating blood was such a rewarding experience! I feel great knowing that my donation can save lives."
                {/* profile image small and feedback wors with star rating */}
              </p>
              <p className="font-bold text-pink-700">- John D.</p>
            </motion.div>

            <motion.div variants={childVariants} className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4  text-zinc-700">
                "The process was quick, easy, and the staff made me feel comfortable throughout."
              </p>
              <p className="font-bold text-pink-700">- Sarah K.</p>
            </motion.div>

            <motion.div variants={childVariants} className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4  text-zinc-700">
                "I never realized how important blood donation was until I needed it myself. Now, I'm a regular donor!"
              </p>
              <p className="font-bold  text-pink-700">- Alex M.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-8 bg-pink-600 text-white text-center" ref={ctaRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            className="text-4xl font-bold mb-8"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition"
          >
            Become a Donor <AiOutlineArrowRight className="inline ml-2" />
          </motion.button>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-900 text-white text-center" ref={contactRef}>
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            className="text-4xl font-bold mb-8"
          >
            Contact Us
          </motion.h2>
          <motion.form
            variants={contactVariants}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
            className="max-w-xl mx-auto"
          >
            <input
              type="text"
              className="w-full mb-4 p-4 rounded-lg bg-gray-800 text-white"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full mb-4 p-4 rounded-lg bg-gray-800 text-white"
              placeholder="Your Email"
            />
            <textarea
              className="w-full mb-4 p-4 rounded-lg bg-gray-800 text-white"
              placeholder="Your Message"
              rows="4"
            />
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
              whileTap={{ scale: 0.9 }}
              className="bg-pink-600 px-8 py-4 rounded-full text-lg hover:bg-pink-700 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

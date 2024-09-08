import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import { AiOutlineArrowRight, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import teamMember1 from './teamMember1.jpg'; // Replace with actual image imports
import teamMember2 from './teamMember2.jpg';
import teamMember3 from './teamMember3.jpg';
import teamMember4 from './teamMember4.jpg';

const teamMembers = [
  {
    name: 'Jane Doe',
    profileTitle: 'Lead Developer',
    img: teamMember1,
    instagram: 'https://instagram.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe',
    discord: 'https://discord.com/users/janedoe'
  },
  {
    name: 'John Smith',
    profileTitle: 'UI/UX Designer',
    img: teamMember2,
    instagram: 'https://instagram.com/johnsmith',
    linkedin: 'https://linkedin.com/in/johnsmith',
    discord: 'https://discord.com/users/johnsmith'
  },
  // Add more team members here
];

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

const MeetOurTeam = () => {
  const { ref: teamRef, inView: teamInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>Meet Our Team - BloodBank</title>
        <meta name="description" content="Meet the dedicated team behind our mission to save lives through blood donation." />
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 animate-gradient"></div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-8 py-24 text-white text-center">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="text-5xl md:text-7xl font-extrabold mb-8"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="text-lg md:text-2xl mb-10"
          >
            Our dedicated team works tirelessly to make a difference in the world of blood donation.
          </motion.p>
        </section>

        {/* Team Members Section */}
        <section className="py-16 px-8 bg-pink-50" ref={teamRef}>
          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
                />
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-700 mb-4">{member.profileTitle}</p>
                <div className="flex space-x-4 mb-4">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Instagram`}>
                    <AiOutlineInstagram className="text-pink-500 hover:text-pink-700 transition" size={24} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`}>
                    <AiOutlineLinkedin className="text-blue-600 hover:text-blue-800 transition" size={24} />
                  </a>
                  <a href={member.discord} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Discord`}>
                    <AiOutlineGithub className="text-gray-900 hover:text-gray-700 transition" size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 px-8 bg-pink-600 text-white text-center">
          <motion.h2
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            className="text-4xl font-bold mb-8"
          >
            Join Us in Our Mission
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#e53e3e' }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition"
          >
            Get Involved <AiOutlineArrowRight className="inline ml-2" />
          </motion.button>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background: linear-gradient(270deg, rgba(255, 105, 180, 1) 0%, rgba(255, 20, 147, 1) 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </>
  );
};

export default MeetOurTeam;

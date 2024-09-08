import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ff0000'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: false
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    },
    retina_detect: true
  };

  return <Particles params={options} />;
};

export default ParticleBackground;

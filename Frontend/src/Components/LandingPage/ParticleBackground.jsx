import React from 'react';
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

  return <Particles params={options} style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticleBackground;

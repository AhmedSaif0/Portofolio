import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

const Particals = () => {

    async function  loadparticals (main) {
        await loadFull(main)
    }

    return (
        <Particles
            id="tsparticles"
            init={loadparticals}
            options={{
                background: {
                    color: {
                        value: "#ececec",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },


    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#182fd4"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 4,
          color: "#92b3ed"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 191.92323070771698,
        color: "#144fd6",
        opacity: 0.4,
        width: 0.7996801279488208
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },

                detectRetina: true,
            }}
        />
    );
};

export default Particals;





// {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: "#182fd4"
//       },
//       shape: {
//         type: "circle",
//         stroke: {
//           width: 4,
//           color: "#92b3ed"
//         },
//         polygon: {
//           nb_sides: 5
//         },
//         image: {
//           src: "img/github.svg",
//           width: 100,
//           height: 100
//         }
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 191.92323070771698,
//         color: "#144fd6",
//         opacity: 0.4,
//         width: 0.7996801279488208
//       },
//       move: {
//         enable: true,
//         speed: 6,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse"
//         },
//         onclick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 1
//           }
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3
//         },
//         repulse: {
//           distance: 200,
//           duration: 0.4
//         },
//         push: {
//           particles_nb: 4
//         },
//         remove: {
//           particles_nb: 2
//         }
//       }
//     },
//     retina_detect: true
//   }





{/* <Particles
            id="tsparticles"
            init={loadparticals}
            options={{
                background: {
                    color: {
                        value: "#ccc",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1},
                    },
                },
                detectRetina: true,
            }}
        />
    ); */}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'mn': '280px',
        // => @media (min-width: 280px) { ... }
        'lm': '420px'
        // => @media (min-width: 420px) { ... }
      },
      fontFamily: {
        'assassin': ['assassin']
      },
      spacing: {
        13: '3.25rem',
      },
      transitionDuration: {
        '1.5': '1500ms',
      },
      backgroundImage: {
        'hero': "url('/public/assets/image/2.jpg')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing:{
          '100%':{
            left:'100%',
            margin:'0 35px 0 45px'
          },
        },
        slide:{
          '100%':{
            top:'-360px',
          },
        },
        myanime:{
          '0%':{transform:'scale(-1)'},
          '10%':{transform:'scale(2)'},
          '30%':{transform:'rotate(360deg)'},
          '50%':{transform:'rotate(60deg)'},
          '80%':{transform:'scaleX(1)'},
          '90%':{backgroundColor:'green'},
          '100%':{borderRadius:'100%'},
        },
        navLink:{
          '0%':{
            width:'0',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '10%':{
            width:'10%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '20%':{
            width:'20%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '30%':{
            width:'30%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '40%':{
            width:'40%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '50%':{
            width:'50%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '60%':{
            width:'60%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '70%':{
            width:'70%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '80%':{
            width:'80%',
            borderBottom:'solid',
            borderColor: 'rgb(74 222 128)',
          },
          '100%':{
            width:'100%',
            borderBottom:'solid', 
            borderColor: 'rgb(74 222 128)', 
          }
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing: 'typing 5000ms steps(23) infinite',
        myanime: 'myanime 4999ms ease-in-out forwards alternate-reverse infinite',
        nav: 'navLink 600ms forwards linear',
        navDark: 'navLinkDark 600ms forwards linear',
        slide: 'slide 10s steps(4) infinite',
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
          title: {
              words: ['Welcome To Valhalla'],
              delay: 3,
              starDelay: 1000,
              typeSpeed: 80,
              backSpeed: 50
          }
      }
  })
  ],
}


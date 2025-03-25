tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#0796A0',
        'black': '#000000',
        'secondary': '#2E2E2E',
        'primaryDark': '#1C6E75'
      },
      fontFamily: {
        'krub' : 'Krub',
        'quicksand' : 'Quicksand',
      },
      boxShadow: {
        'custom': '0px 4px 24px 1px #ECF3FA'
      },
      screens: {
        'xl': '1280px',
        'xs': '520px',
      },
    }
  }
}

AOS.init({
  duration: 1500, 
  offset: 100,   
  once: true   
});



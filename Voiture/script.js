window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

const theme = document.querySelectorAll('.theme')

theme.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log('yes');
    document.body.classList.remove('darkTheme', 'yellowTheme', 'blueTheme')
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "blue":
        document.body.classList.add("blueTheme");
        break;
      default:
        null;
    }
  })
);
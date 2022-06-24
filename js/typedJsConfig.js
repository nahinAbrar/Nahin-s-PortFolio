var options = {
  stringsElement: "#typedStrings",
  smartBackspace: true,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
};

var typed = new Typed("#typed", options);


var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if(this.window.pageYOffset > 100){
    nav.classList.add('bg-dark');
  }else{
    nav.classList.remove('bg-dark');
  }
})
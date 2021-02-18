import './styles.css';

var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 100) {
    mybutton.classList.add = 'block';
  } else {
    mybutton.classList.add = 'hidden';
  }
}

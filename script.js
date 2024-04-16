// Function to set opacity of .inner.start elements to 1
function setOpacityToOne() {
  // Select all elements with both the 'inner' and 'start' classes
  var elements = document.querySelectorAll('.line .inner.start');
  
  // Loop through the NodeList and set the opacity of each element
  elements.forEach(function(element) {
    element.style.opacity = '1';
  });
}

// Add event listener for 'scroll' events on the window object
window.addEventListener('scroll', setOpacityToOne);

// Add event listener for 'click' events on the window object
window.addEventListener('click', setOpacityToOne);

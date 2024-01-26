 // Function to simulate typing effect
 function typeText(element, text, speed) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Get the output div element
  const outputElement = document.getElementById('output');

  // Text to be typed
  const textToType = 'tekan hati di bawah ini!';

  // Typing speed in milliseconds
  const typingSpeed = 100;

  // Start the typing effect
  typeText(outputElement, textToType, typingSpeed);
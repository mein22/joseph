 // Get the current year
  let currentYear = new Date().getFullYear();

  // Select the paragraph element in the bottom container
  let copyrightText = document.querySelector('.bottom-container p');

  // Update the copyright text with the current year
  copyrightText.innerHTML = `&copy; ${currentYear} Yahaya Joseph (Mein).`;


// Select all anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Add event listener to each link
anchorLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

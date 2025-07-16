 // Get the current year
  let currentYear = new Date().getFullYear();

  // Select the paragraph element in the bottom container
  let copyrightText = document.querySelector('.bottom-container p');

  // Update the copyright text with the current year
  copyrightText.innerHTML = `&copy; ${currentYear} Yahaya Joseph (Mein).`;


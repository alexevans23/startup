const quotesBySubject = {
    motivation: [
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean"
    ],
    happiness: [
      "The greatest happiness you can have is knowing that you do not necessarily require happiness. -William Saroyan",
      "Happiness is a warm puppy. -Charles M. Schulz",
      "Happiness is not something ready made. It comes from your own actions. -Dalai Lama",
      "The happiness of your life depends upon the quality of your thoughts: therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature. -Marcus Aurelius"
    ],
    positivity: [
      "Positive anything is better than negative nothing. -Elbert Hubbard",
      "In order to carry a positive action we must develop here a positive vision. -Dalai Lama",
      "Positive thinking will let you do everything better than negative thinking will. -Zig Ziglar"
    ],
    patience: [
      "Patience is not the ability to wait, but the ability to keep a good attitude while waiting. -Joyce Meyer",
      "Patience is bitter, but its fruit is sweet. -Jean-Jaques Rousseau",
      "Tolerance and patience should not be read as signs of weakness, they are signs of strength. -Dalai Lama",
      "To lose patience is to lose the battle. -Mahatma Ghandi",
      "Have patience with all things but first of all with yourself. -Francis de Sales"
    ],
    charity: [
      "It’s not how much we give but how much love we put into giving. -Mother Teresa",
      "The best way to find yourself is to lose yourself in the service of others. -Mahatma Gandhi",
      "No one has ever become poor by giving. -Anne Frank",
      "It is a serious thing to live in a society of possible gods and goddesses, to remember that the dullest and most uninteresting person you talk to may one day be a creature which . . . you would be strongly tempted to worship. . . . There are no ordinary people. - CS Lewis",
      "Men, take care not to make women weep, for God counts their tears. -Thomas S. Monson",
      "If we are truly disciples of the Lord Jesus Christ, we will reach out with love and understanding to all of our neighbors at all times. -M. Russell Ballard"
    ]
  };
  
  // Define a function to get a random quote for a given subject
  function getRandomQuote(subject) {
    const quotes = quotesBySubject[subject];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  // Find the form element and attach a "submit" event listener to it
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
  
    // Get the selected subject from the dropdown menu
    const quoteSubject = document.querySelector("#quoteSubject");
    const subject = quoteSubject.value.toLowerCase();
  
    // Get a random quote for the selected subject
    const quote = getRandomQuote(subject);
  
    // Display the quote on the page
    const quoteDisplay = document.querySelector("#quoteDisplay");
    quoteDisplay.textContent = quote;
  });
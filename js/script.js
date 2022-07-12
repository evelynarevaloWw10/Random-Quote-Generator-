/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

  //A arry with 5 object quotes that have been selected to randomly display: quote, source, year and citation souce

  const quotes = [
    {quote: "Sometimes the questions are complicated, and the answers are simple.", 
    source: "Dr. Seuss",
    year: "1980",
    citation: "Book"
    },
    
    {quote: "Anyone who has never made a mistake has never tried anything new.",
    source: "Albert Einstein",
    year: "1976",
    citation: "Book"
    },
    
    {quote: "Knowing what must be done does away with fear.",
    source: "Rosa Parks",
    year: "1960",
    citation:"Poster",
    },
    
    {quote:"Life is really simple, but we insist on making it complicated.",
    source:"Confucius",
    year:"1005",
    citation: "Book"
    },
    
    
    {quote:"The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    source:"Thich Nhat Hanh",
    year: "1806",
    citation: "Poster" },
    ];  
    
    
    //* getRandomQuote() to select randomized number and assign a new value to variable: randomNumber. 
    function getRandomQuote(array) {
     
      var quoteIndex = Math.floor(Math.random() * quotes.length); 
      for (i = 0; i < quotes.length; i++) { 
    
      var randomNumber = quotes[quoteIndex]; 
      } 
      return randomNumber;
    }
    var result = getRandomQuote(quotes);
     
    
        
        // PrintQuote variable was created to call getRandomQuote function, additionally: if statements are checking: citation, year and linking it up to the HTML.
    function printQuote() {
    
        let printRandomQuote = getRandomQuote(quotes);
        let anotherVariable = "";
        
      anotherVariable += 
      "<p class = 'quote'>" + printRandomQuote.quote + "</p>"
    
      anotherVariable+= "<p class = 'source'>"+printRandomQuote.source;
     
    if (printRandomQuote.citation) {
        anotherVariable += "<span class = 'citation'>" + " : "+printRandomQuote.citation + "</span>"
      }  
    if (printRandomQuote.year) {
        anotherVariable += "<span class = 'year'>" + printRandomQuote.year + "</span>"
      }   
       document.getElementById('quote-box').innerHTML = anotherVariable; 
      
        return anotherVariable;
      }
        console.log(printQuote());
    
    document.getElementById('load-quote').addEventListener("click", printQuote, false);
    
    
      
    
    
    
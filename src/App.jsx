import { Twitter } from 'lucide-react';
import { useState, useEffect } from 'react'

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" }
];

const colors = [
  "#52796F", // deep sage green
  "#354F52", // dark teal gray
  "#2F3E46", // charcoal green-blue
  "#6B705C", // olive gray
  "#B7B7A4", // warm gray
  "#8D99AE", // slate blue-gray
  "#5C677D", // muted navy
  "#7F5539", // cocoa brown
  "#A47148", // warm caramel
  "#4A5759", // steel green-gray
  "#6C757D", // cool gray
  "#3D405B"  // dusty indigo
];


function App() {

  const [quote, setQuote] = useState(quotes[0]);
  const [color, setColor] = useState(colors[0]);
  const [fadeIn, setFadeIn] = useState(true);

  function getRandomQuote() {
    setFadeIn(false);
    let newQuote, newColor;

    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.text === quote.text);

    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === color);

    setTimeout(() => {
      setQuote(newQuote);
      setColor(newColor);
      setFadeIn(true);
    }, 200)
  }

  useEffect(() => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    setQuote(randomQuote);
    setColor(randomColor);
  }, [])

  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-700' style={{ backgroundColor: color }}>
      <h1 className='text-white absolute top-24 text-5xl underline'>Quote Generator</h1>
      <div id='quote-box' className='bg-white shadow-2xl rounded-lg max-w-2xl p-12'>
        <div className={`mb-8 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <div id='text' className='font-serif text-center text-3xl mb-5'>
            {quote.text}
          </div>
          <div id='author' className='font-serif text-right'>
            - {quote.author}
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <a
            href="twitter.com/intent/tweet"
            id='tweet-quote'
            target='_top'
            rel='noreferrer noopener'
            className='h-12 w-12 rounded cursor-pointer flex items-center justify-center hover:opacity-80 transition-colors duration-300'
            style={{ backgroundColor: color }}
            title='Tweet this quote'
          >
            <Twitter size={20} className='text-white' />
          </a>
          <button
            id='new-quote'
            className='px-6 py-3 hover:opacity-80 transition-colors duration-300 text-white rounded'
            style={{ backgroundColor: color }}
            title='Generate new quote'
            onClick={getRandomQuote}
          >
            New Quote
          </button>
        </div>
      </div>
      <p className='text-white text-sm mt-2'>by yatharth</p>
    </div>
  )
}

export default App
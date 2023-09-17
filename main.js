const quoteAuthor = document.getElementById("auther");
const quoteText = document.getElementById("quote");


const arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.',
     "src" : "./img/9K8A5729_2022-03-02-103800_hefg.jpg"
     
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.',
     "src" : "./img/9K8A5729_2022-03-02-103800_hefg.jpg"

    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.',
     "src" : "./img/9K8A5729_2022-03-02-103800_hefg.jpg"

    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.',
     "src" : "./img/9K8A5729_2022-03-02-103800_hefg.jpg"

    },
];

function getQuotes(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    quoteText.innerHTML = `${arrayOfQuotes[random].quote}`;
    quoteAuthor.innerHTML = `${arrayOfQuotes[random].author}`;
   

}


var arrayOfQuotes = [
    {
        "author":"Lewis Carroll",
        "quote":"Why, sometimes I've believed as many as six impossible things before breakfast."
    },
    {
        "author":"Lewis Carroll",
        "quote":"It's no use going back to yesterday, because I was a different person then."
    },
    {
        "author":"Lewis Carroll",
        "quote":"We're all mad here."
    },
    {
        "author":"Kunt Vonnegut",
        "quote":"Everything was beautiful, and nothing hurt."
    },
    {
        "author":"Louisa May Alcott",
        "quote":"I am not afraid of storms, for I am learning how to sail my ship."
    },
    {
        "author":"Paulo Coelho",
        "quote":"It's the possibility of having a dream come true that makes life interesting."
    },
    {
        "author":"Gabriel Garcia Marquez",
        "quote":"Siempre queda algo para amar."
    },
    {
        "author":"Angie Thomas",
        "quote":"What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?"
    },
    {
        "author":"Antoine de Saint-Exupéry",
        "quote":"It is only with the heart that one can see rightly; what is essential is invisible to the eye."
    },
    {
        "author":"Miguel de Cervantes",
        "quote":"Demasiada cordura puede ser la peor de la locura, ver la vida como es y no como debería de ser."
    }
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length)
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML ="- "+ arrayOfQuotes[randomNumber].author;
}
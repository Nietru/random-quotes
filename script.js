function generate() {   /* creating the function for our generate button id-selector from our html file. */
    var quotes = {      /* create a dictionary (author is the key, and the quote is the value for the assigned key.) with our authors and quotes. */
        "- Jules Renard" : ' "The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "- Deepak Chopra" : ' "Sex is always about emotions. Good sex is about free emotions; bad sex is about blocked emotions."',
        "- Joseph Campbell" : ' "Love is a friendship set to music."',
        "- Lucille Ball" : '"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world."',
        "- Aristotle" : '"We are what we repeatedly do. Excellence then, is not an act, but a habit."',
        "- Michel de Montaigne" : '"The soul which has no fixed purpose in life is lost; to be everywhere, is to be nowhere."',
        "- James Dean" : "'Dream as if you'll live forever, live as if you'll die today.'",
        "- Bertand Russel" : '"The good life is inspired by love and guided by knowledge."'
    }   
    var authors = Object.keys(quotes);  /* use a built-in function called keys, and pass it the name of your dictionary: quotes. */

    var author = authors[Math.floor(Math.random() * authors.length)];   /* create var called author and use the math floor and math random to generate a result given the length of the array. */

    var quote = quotes[author]; /* matches the quote to the author that is generated. */

    document.getElementById("quote").innerHTML = quote;   /* document object represents your webpage. getElementByID("quote"): calls info from line 19 in html file.*/
    document.getElementById("author").innerHTML = author;  /* "author": calls info from line 20 in html file. .innerHTML sends the string to the webpage... i think lol. */
}
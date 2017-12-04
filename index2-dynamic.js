var myQuotes = [
    {"quote": "Moral indignation is jealousy with a halo.",
	"author": "H. G. Wells (1866-1946)"
}, {"quote": "Victory goes to the player who makes the next-to-last mistake.",
	"author": "Chessmaster Savielly Grigorievitch Tartakower (1887-1956)"
}, {"quote": "Don't be so humble - you are not that great.",
	"author": "Golda Meir (1898-1978) to a visiting diplomat"
}, {"quote": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
	"author": "Albert Einstein (1879-1955)"
}
    ]
    
    //name: "CareerDevs Innt"
    //console.log(myQuotes[1].quote);
    
    
    //way to put quote into the empty p tags with ids 
//function displayDetails(quote) {
    //console.log(quote);
    //display quote and author
    //document.getElementById("quoteHere").innerHTML = myQuotes[i].quote;
    //document.getElementById("authorHere").innerHTML = myQuotes[i].author;
//}

    // loop to walk through the elements in the array of quotes
for (var i = 0; i < myQuotes.length; i++) {
    console.log("start");
    var submitBtn = document.createElement("BUTTON");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("name", "aQuote");
    submitBtn.setAttribute("value", "i");    //value is not client facing, it is for you
    submitBtn.setAttribute("id", "quote" + i);
    submitBtn.setAttribute("onclick", "displayDetails(" + i +")");
    //submitBtn.onclick = displayDetails(i);
    //document.getElementById("quoteHere").appendChild(submitBtn);
    //document.getElementById("authorHere").appendChild(submitBtn);
    document.getElementById("quoteHere").innerHTML = myQuotes[i].quote;
    document.getElementById("authorHere").innerHTML = myQuotes[i].author;
    
    console.log("stop");
}
var radios = document.getElementsByName("aQuote");
var randomQuote = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            randomQuote = radios[i].value;
            break;
        }
    }


// var radios = document.getElementByName("")

//  not sure about this one
document.getElementById("quoteButton").onsubmit = function(event) {
    event.onclick
}
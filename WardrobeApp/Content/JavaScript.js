function stuff() {

    var x = document.getElementById("bunderhosen");
    var userResponse = prompt('What is the name of your bunny?')
    if (userResponse) {
        x.innerHTML = "Let's dress " + userResponse;
    } else {
        x.innerHTML = "Bunderhosen";
    }
}

function overBtn(x) {
    x.style.fontSize = "large";
    x.style.color = "navy";
    x.innerText = "Created by Kristin Weis";
}

function outBtn(x) {
    var str = document.getElementById("footer").innerHTML; 
    var res = str.replace("Created by Kristin Weis", "&copy; 2018");
    document.getElementById("footer").innerHTML = res;
    x.style.fontSize = "small";
    x.style.color = "#917401";

}

function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (userResponse) {
        var win = window.open("http://www.rabbit.org", '_blank');
        win.focus();
    }
}

function trivia() {
    var triviaArray = ["Cabbage", " romaine", " endive", " avocado."]
    var correctAnswerArray = ["cabbage", "avocado"]
    var userResponse = prompt('Of the following foods, which can be fatal to a rabbit?\n' + triviaArray);

    if (correctAnswerArray.includes(userResponse)) {
        alert('Correct');
    }

    else {
        alert('Incorrect');
    }

}

function triviaBox() {
    var x = document.getElementById('trivia-ribbon')
    x.style.display = "none";

}


function bounce() {

    var x = document.getElementById("stuff"); // points to h1 by ID

    x.style.WebkitAnimation = "jackInTheBox 4s 2";
    x.style.animation = "jackInTheBox 4s 2";       // for other browsers


    x.addEventListener("webkitAnimationStart", myStartFunction);
    x.addEventListener("webkitAnimationIteration", myRepeatFunction);
    x.addEventListener("webkitAnimationEnd", myEndFunction);

    // other browsers
    x.addEventListener("animationstart", myStartFunction);
    x.addEventListener("animationiteration", myRepeatFunction);
    x.addEventListener("animationend", myEndFunction);
}

function myStartFunction() {
    this.style.color = "#9b7da3";
}

function myRepeatFunction() {
    this.style.color = "#82b1ba";
}

function myEndFunction() {
    this.style.color = "#b8b2ba";
}

var clothingArray = [];
var typeArray = [];
var resultsArray = [];

function createArray() {

    var coll = document.getElementsByTagName('h3');
    for (var i = 0; i < coll.length; i++) clothingArray.push(coll[i].innerText);

    var coll2 = document.getElementsByClassName('banner_txt');
    for (var i = 0; i < coll2.length; i++) typeArray.push(coll2[i].innerText);


}

function sortClothes() {

    var userResponse = prompt('What type of clothing are you interested in?');

    var response = userResponse.toString();

    var responseLower = response.toLowerCase();

    var arrayLength = typeArray.length;

    for (var i = 0; i < arrayLength; i++) {
        if (typeArray[i] == responseLower) {
            alert(clothingArray[i]);
        }
        else {

        }

    }
}
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
function changeMode(){
    changeClasses();
}

function changeClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    pageTitle();
    textButton();
}


function pageTitle(){
    if( h1.classList.contains('dark-mode') == true ){
        document.getElementById("page-title").innerHTML = "Dark Mode ON"
    }else{
        document.getElementById("page-title").innerHTML = "Ligth Mode ON"
    }
}

function textButton(){
    if (button.classList.contains('dark-mode') == true ){
        document.getElementById("mode-selector").innerHTML = "Ligth Mode"
    }else{
        document.getElementById("mode-selector").innerHTML = "Dark Mode"
    }
}

const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];


button.addEventListener("click", changeMode);




var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-area");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationUrL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with surver")
}

function clickHandler(){
    var inputText = txtInput.value;
    //outputDiv.innerText = "abc" + txtInput.value;//
fetch(getTranslationUrL(inputText))
.then(response=>response.json())
.then(json=>{
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
})
    
   
.catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler) 
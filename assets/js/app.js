const inputText=document.getElementById('input-text');
const outputText=document.getElementById('output-text');
const translateBtn=document.getElementById('translate-btn');
translateBtn.addEventListener('click',translate)
var serverUrl='https://api.funtranslations.com/translate/minion.json'
function getFullUrl(text){
    console.log(serverUrl+"?"+"text="+text)
    return serverUrl+"?"+"text="+text;
}
function translate(){
    var currentText=inputText.value;
    fetch(getFullUrl(currentText))
    .then(response=>response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outputText.innerText=translatedText;
    })
    .catch(errorHandler)
}
function errorHandler(error){
    console.log('error is',error)
}
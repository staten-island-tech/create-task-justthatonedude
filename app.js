const URL = "https://opensky-network.org/api/flights/departure?airport="
const DOMSelectors = {
    searchQuery: document.querySelector("#search"),
    form: document.querySelector("#form"),
}

async function apiCall(URL){
        const userInput = DOMSelectors.searchQuery.value
        const unixTime = Date.now();
        const beginningTime = Date.now() - 60000
        const response = await fetch(URL + `${userInput}&begin=${beginningTime}&end=${unixTime}`);
        const result = await response.text();
        console.log(result)
        
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    apiCall(URL)
})
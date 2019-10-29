const url = 'https://api.adviceslip.com/advice'

document.getElementById('get-advice-btn').addEventListener('click', getAdvice);

document.getElementById('close-advice').addEventListener('click', closeAdvice);

function getAdvice() {
    confetti.start();
    fetch(url) //by default fetch does a GET request
        .then(response => response.json()) // when GET request is made, I want the response to be JSON
        .then(function(advice) { //how we will handle the data (advice object)
            const adviceData = advice.slip.advice; //advice (reponse).slipobject.advicestring
            document.getElementById('advice').innerHTML = adviceData; //references the div we want to populate in html
        })
    
 }

 function closeAdvice() {
     confetti.stop();
 }
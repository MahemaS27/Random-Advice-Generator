const url = 'https://api.adviceslip.com/advice'

document.getElementById('get-advice-btn').addEventListener('click', getAdvice);

document.getElementById('close-advice').addEventListener('click', closeAdvice);

function getAdvice() {
    confetti.start();
    fetch(url) // Call the fetch function passing the url of the API as a parameter (fetch uses GET by default)
        .then(response => response.json())
        .then(function(advice) {
            const adviceData = advice.slip.advice;
            document.getElementById('advice').innerHTML = adviceData;
        })
 }

 function closeAdvice() {
     confetti.stop();
 }
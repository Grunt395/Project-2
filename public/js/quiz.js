
// document.querySelector("#check-true")
// document.querySelector("#check-false")


// console.log(document.querySelectorAll("#check-true"))
// console.log(document.querySelectorAll("#check-false"))

const submit = document.getElementById("submitQuiz")

submit.addEventListener("click", async function (event) {
    // alert("test")
    event.preventDefault()
    let userAnswers = []
    let checkAnswers = document.querySelectorAll("#answer")
    console.log(checkAnswers)
    for (let index = 0; index < checkAnswers.length; index++) {
        const answer = checkAnswers[index];
        userAnswers.push(answer.checked)
    }
    console.log(userAnswers)
    const response = await fetch(`/api/quiz`, {
        method: 'POST',
        body: JSON.stringify({answer: userAnswers }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert('submited answers');
      } else {
        alert('Failed to submit answers');
      }
})
// console.log(document.getElementById("submitQuiz"))
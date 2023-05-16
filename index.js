
function takeValues(event) {
    event.preventDefault();
    let username = document.getElementById("name");
    let email = document.getElementById("email");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let detail = {
        Username: username.value,
        Email: email.value,
        Date: date.value,
        Time: time.value
    }
    console.log(detail)
}
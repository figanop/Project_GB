function openMail() {
    window.open('mailto:someone@example.com', '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", openMail);
    }
});
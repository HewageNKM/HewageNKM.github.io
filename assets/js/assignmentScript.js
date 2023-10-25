$("#assignmentBackToTopBtn").on("click", function () {
    console.log("clicked");
    scroll({behavior: "smooth"}, "assignmentHome");
});
$("#assignmentSendBtn").on("click", function () {
    var response = grecaptcha.getResponse();
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    if (!response.length > 0) {
        alert("Please verify that you are not a robot.");
    } else {
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill all the fields.")
        } else {
            alert("Thank you for your message. I will get back to you soon.")
        }
    }
});




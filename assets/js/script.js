// Scrolling Animation
const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

var elements = $(".hidden").each(function (i, el) {
    intersectionObserver.observe(el);
});

// Resume Button
$("#resumeBtn").on("click", function () {
    console.log("clicked");
    window.open("https://resume.io/r/VK72uLGtu", "_blank");
});

// Certifications Button
$("#certBtn").on("click", function () {
    console.log("clicked");
    window.open("https://www.linkedin.com/in/nadun-malwenna-776b88282/details/certifications", "_blank");
});

//projectBtn
$("#projectBtn").on("click", function () {
    console.log("clicked");
    window.open("https://github.com/HewageNKM?tab=repositories", "_blank");
});

// AssignmentBtn
$("#assignmentBtn").on("click", function () {
    console.log("clicked");
    window.open("directory/assignments.html", "_blank");
});

// Back to Top Button
$("#backToTopBtn").on("click", function () {
    console.log("clicked");
    scroll({behavior: "smooth"}, "home");
});

//Captcha
$("#sendBtn").on("click", function () {
    var response = grecaptcha.getResponse();
    if (!response.length > 0) {
        alert("Please verify that you are not a robot.");
    } else {
        alert("Thank you for your message. I will get back to you soon.")
    }
});
$("assignmentBtn").on("click", function () {
    window.open("directory/assignments.html", "_blank");
});


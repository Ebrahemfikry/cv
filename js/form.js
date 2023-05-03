const contactForm = document.forms[0];
function sendMail() {
    let name = document.getElementById("name").value,
            phone = document.getElementById("phone").value,
            email = document.getElementById("email").value,
            subject = document.getElementById("sub").value,
            message = document.getElementById("msg").value;
        if (name === "" || email === "" || sub === "" || phone === "" || message === "") {
            return;
        }
    const params = {
        name: name,
        phone: phone,
        message: message,
        subject,
        email,
    };

    emailjs
        //replace service id and template id with yours
        .send("service_lscwo5r", "template_nbrvzon", params)
        .then(function (res) {
        document.forms[0].reset();
    });
}

// SENT MESSAGE FUNCTIONS

contactForm.onsubmit = (e) => {
    e.preventDefault();
    sendMail();
};


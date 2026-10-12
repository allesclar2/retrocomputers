// <!-- ######### - Created by Adam Clark, final version 12-10-2026.
// ######### - No form of AI has been used, Category AITS descriptor is 1(No AI)
// ######### - Retro Computing is a hobby of mine, when this assignment was announced, I was able to use a vast amount of imagiary and information already available to hand.
// ######### - All sources for reference accounted for. Previously used and known knowledge used for vast majority of logic.
// ######### - Where further reading has been needed, i have included the reference link to the guide at the start of the appropriate area of code. -->

// Baseline for contact form is from https://www.w3schools.com/howto/howto_css_contact_form.asp
// 
const contactLink = document.getElementById("contactLink");
const contactModal = document.getElementById("contact");
const closeContact = document.getElementById("closeContact");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

const messagePopup = document.getElementById("messagePopup");
const closeMessagePopup = document.getElementById("closeMessagePopup");
const messagePopupOk = document.getElementById("messagePopupOk");


// Further reading from https://www.w3schools.com/howto/howto_js_popup.asp for message popup
// shows popup message
function showMessagePopup(mailto) {

    messagePopup.classList.add("show");
    messagePopup.setAttribute("aria-hidden", "false");

    messagePopupOk.focus();

    messagePopupOk.onclick = function () {
        hideMessagePopup();
        closeContactModal();
        window.location.href = mailto;
    };
}

// hides popup message
function hideMessagePopup() {
    messagePopup.classList.remove("show");
    messagePopup.setAttribute("aria-hidden", "true");
}

closeMessagePopup.addEventListener("click", hideMessagePopup);


messagePopup.addEventListener("click", function (event) {
    if (event.target === messagePopup) {
        hideMessagePopup();
    }
});

//closes popup contact modal
function closeContactModal() {
    contactModal.classList.remove("show");
    contactModal.setAttribute("aria-hidden", "true");
}

contactLink.addEventListener("click", function (event) {
    event.preventDefault();

    contactModal.classList.add("show");
    contactModal.setAttribute("aria-hidden", "false");
});

closeContact.addEventListener("click", closeContactModal);

contactModal.addEventListener("click", function (event) {
    if (event.target === contactModal) {
        closeContactModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeContactModal();
    }
});

// form validtion function, checks user input data and prompts the vistor on any errors
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const experience = document.getElementById("contactExperience").value.trim();

    formFeedback.textContent = "";
    formFeedback.className = "form-feedback";


    if (experience === "") {
        formFeedback.textContent = "Please select your level of experience.";
        formFeedback.classList.add("error");
        document.getElementById("contactExperience").focus();
        return;
    }
    if (name.length < 2) {
        formFeedback.textContent = "Please enter your name.";
        formFeedback.classList.add("error");
        document.getElementById("contactName").focus();
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.classList.add("error");
        document.getElementById("contactEmail").focus();
        return;
    }

    if (subject.length < 2) {
        formFeedback.textContent = "Please enter a subject.";
        formFeedback.classList.add("error");
        document.getElementById("contactSubject").focus();
        return;
    }

    if (message.length < 10) {
        formFeedback.textContent = "Please enter a message containing at least 10 characters.";
        formFeedback.classList.add("error");
        document.getElementById("contactMessage").focus();
        return;
    }

    // this area of the code prepares the email to be sent on in the vistiors default email browser software.
    const body =
        "Name: " + name + "\n\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message;

    const mailto =
        "mailto:Adam.K.Clark2@student.shu.ac.uk" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);



    showMessagePopup(mailto);
});

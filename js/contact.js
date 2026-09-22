const contactLink = document.getElementById("contactLink");
const contactModal = document.getElementById("contact");
const closeContact = document.getElementById("closeContact");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

function closeContactModal() {
    contactModal.classList.remove("show");
    contactModal.setAttribute("aria-hidden", "true");
}

contactLink.addEventListener("click", function(event) {
    event.preventDefault();

    contactModal.classList.add("show");
    contactModal.setAttribute("aria-hidden", "false");
});

closeContact.addEventListener("click", closeContactModal);

contactModal.addEventListener("click", function(event) {
    if (event.target === contactModal) {
        closeContactModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeContactModal();
    }
});

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    formFeedback.textContent = "";
    formFeedback.className = "form-feedback";

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

    const body =
        "Name: " + name + "\n\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message;

    const mailto =
        "mailto:Adam.K.Clark2@student.shu.ac.uk" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    formFeedback.textContent = "Opening your email application...";
    formFeedback.classList.add("success");

    window.location.href = mailto;
});

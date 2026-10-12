// <!-- ######### - Created by Adam Clark, final version 12-10-2026.
// ######### - No form of AI has been used, Category AITS descriptor is 1(No AI)
// ######### - Retro Computing is a hobby of mine, when this assignment was announced, I was able to use a vast amount of imagiary and information already available to hand.
// ######### - All sources for reference accounted for. Previously used and known knowledge used for vast majority of logic.
// ######### - Where further reading has been needed, i have included the reference link to the guide at the start of the appropriate area of code. -->
// ######### - w3schools.com was used as a guidance for HTML, CSS and JS. -->


// Reads the respective compomnet infomration from the owned.js file.
// Then is used to display the information, images (via lightbox) and interactions with entries for Graphics Cards.

const gpuList = document.getElementById("gpu-list");

if (gpuList) {
    gpuList.innerHTML = owned.map(system => {
        const { gpu } = system;

        return `
            <article class="gpu-card">

                ${
                    gpu.image
                        ? `
                            <button
                                class="image-button"
                                type="button"
                                aria-label="Enlarge image of ${gpu.name}"
                            >
                                <img
                                    src="${gpu.image}"
                                    alt=""
                                >
                            </button>

                            <p class="site-link-citation">
                                Image from
                                <a href="${gpu.url}" target="_blank" rel="noopener noreferrer">
                                The Retro Web (n.d.).
                                </a>
                            </p>
                        `
                        : `
                            <div class="gpu-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${gpu.name}</h3>

                <p>
                    <strong>Manufacturer:</strong>
                    ${gpu.manufacturer || "Not listed"}
                </p>

                <p>
                    <strong>Released:</strong>
                    ${gpu.released || "Not listed"}
                </p>

                <p>
                    <strong>Interface:</strong>
                    ${gpu.Interface || "Not listed"}
                </p>

                <p>
                    <strong>RAM:</strong>
                    ${gpu.RamSize || "Not listed"}
                </p>

                <p>
                    ${
                        gpu.url
                            ? `
                                <a
                                    href="${gpu.url}"
                                    class="site-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View GPU details
                                </a>
                            `
                            : ""
                    }
                </p>

            </article>
        `;
    }).join("");
}

// Creates the lightbox for an enlarged image, with escape button and event listener.
// Lightbox creation and reading / coding guide from https://www.w3schools.com/howto/howto_js_lightbox.asp 

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

document.addEventListener("click", function (event) {

    const button = event.target.closest(".image-button");

    if (!button) {
        return;
    }

    const image = button.querySelector("img");

    lightboxImage.src = image.src;
    lightboxImage.alt = button.getAttribute("aria-label");

    lightbox.classList.add("active");
    closeLightbox.focus();
});

closeLightbox.addEventListener("click", function () {

    lightbox.classList.remove("active");

    lightboxImage.src = "";
});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

        lightboxImage.src = "";
    }
});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        lightboxImage.src = "";
    }
});

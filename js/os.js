const osList = document.getElementById("os-list");

if (osList) {
    osList.innerHTML = owned.map(system => {
        const { os } = system;

        return `
            <article class="os-card">

                ${
                    os.image
                        ? `
                            <img
                                src="${os.image}"
                                alt="${os.name}"
                                class="os-image"
                            >
                            <p class="site-link-citation">
                                Image from
                                <a href="${os.url}" target="_blank" rel="noopener noreferrer">
                                The Wikipedia Web (n.d.).
                                </a>                                
                            </p>
                        `
                        : `
                            <div class="os-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${os.name || "Not listed"}</h3>

                <p>
                    <strong>Released:</strong>
                    ${os.released || "Not listed"}
                </p>

                <p>
                                  ${
                    os.url
                        ? `
                            <a
                                href="${os.url}"
                                class="site-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View OS details
                            </a>
                        `
                        : ""
                }
                </p>
            </article>
        `;
    }).join("");
}

const lightbox = document.getElementById("image-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");



document.addEventListener("click", function (event) {

    const image = event.target.closest(".os-list img");

    if (!image) {
        return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");
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
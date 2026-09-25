const towerList = document.getElementById("tower-list");

if (towerList) {
    const uniqueTowers = Array.from(
    new Map(owned.map(system => [system.tower.name, system])).values()
);

towerList.innerHTML = uniqueTowers.map(system => {

        const { tower } = system;
        
        return `
            <article class="tower-card">

                ${
                    tower.image
                        ? `
                            <button
                                class="image-button"
                                type="button"
                                aria-label="Enlarge image of ${tower.name || "Computer case"}"
                            >
                                <img
                                    src="${tower.image}"
                                    alt=""
                                >
                            </button>

                            <p class="site-link-citation">
                                Image from
                                <a href="${tower.url}" target="_blank" rel="noopener noreferrer">
                                Dan's Data, n.d.
                                </a>
                            </p>
                        `
                        : ""
                }

                <h3>${tower.name || "Not listed"}</h3>

            </article>
        `;
    }).join("");
}

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

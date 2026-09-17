const cpuList = document.getElementById("cpu-list");

if (cpuList) {
    cpuList.innerHTML = owned.map(system => {
        const { cpu } = system;

        return `
            <article class="cpu-card">

                ${
                    cpu.image
                        ? `
                            <img
                                src="${cpu.image}"
                                alt="${cpu.name}"
                            >

                            <p class="site-link-citation">
                                Image from
                                <a
                                    href="${cpu.url}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    The Retro Web (n.d.).
                                </a>
                            </p>
                        `
                        : `
                            <div class="cpu-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${cpu.name}</h3>

                <p>
                    <strong>Manufacturer:</strong>
                    ${cpu.manufacturer || "Not listed"}
                </p>

                <p>
                    <strong>Released:</strong>
                    ${cpu.released || "Not listed"}
                </p>

                <p>
                    <strong>Format:</strong>
                    ${cpu.format || "Not listed"}
                </p>

                <p>
                    <strong>Clockspeed:</strong>
                    ${cpu.clockspeed || "Not listed"}
                </p>

                <p>
                    ${
                        cpu.url
                            ? `
                                <a
                                    href="${cpu.url}"
                                    class="site-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View CPU details
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

    const image = event.target.closest(".cpu-list img");

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
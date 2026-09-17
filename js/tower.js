const towerList = document.getElementById("tower-list");

if (towerList) {
    towerList.innerHTML = owned.map(system => {
        const { tower } = system;
        
        return `
            <article class="tower-card">

                ${tower.image ?`
                    <img
                        src="${tower.image}"
                        alt="${tower.name || "Computer case"}"
                    >
                            <p class="site-link-citation">
                                Image from
                                <a href="${tower.url}" target="_blank" rel="noopener noreferrer">
                                Dan's Data, n.d.
                                </a>                                
                            </p>
                ` : ""}

                <h3>${tower.name || "Not listed"}</h3>

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
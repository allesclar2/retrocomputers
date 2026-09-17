const motherboardList = document.getElementById("motherboard-list");

if (motherboardList) {
    motherboardList.innerHTML = owned.map(system => {
        const { motherboard } = system;

        return `
            <article class="motherboard-card">

                ${
                    motherboard.image
                        ? `
                            <img
                                src="${motherboard.image}"
                                alt="${motherboard.name}"
                                class="motherboard-image"
                            >
                            <p class="site-link-citation">
                                Image from
                                <a href="${motherboard.url}" target="_blank" rel="noopener noreferrer">
                                The Retro Web (n.d.).
                                </a>                                
                            </p>
                        `
                        : `
                            <div class="motherboard-image-placeholder">
                                No image available
                            </div>
                        `
                }

                <h3>${motherboard.name}</h3>

                <p>
                    <strong>Manufacturer:</strong>
                    ${motherboard.manufacturer || "Not listed"}
                </p>

                <p>
                    <strong>Chipset:</strong>
                    ${motherboard.chipset || "Not listed"}
                </p>

                <p>
                    <strong>Platform:</strong>
                    ${motherboard.platform || "Not listed"}
                </p>

                <p>
                    ${
                        motherboard.url
                            ? `
                                <a
                                    href="${motherboard.url}"
                                    class="site-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View motherboard details
                                </a>
                            `
                            : ""
                    }
                </p>

            </article>
        `;
    }).join("");
}
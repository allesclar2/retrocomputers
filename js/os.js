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

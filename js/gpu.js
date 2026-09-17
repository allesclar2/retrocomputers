const gpuList = document.getElementById("gpu-list");

if (gpuList) {
    gpuList.innerHTML = owned.map(system => {
        const { gpu } = system;

        return `
            <article class="gpu-card">

                ${
                    gpu.image
                        ? `
                            <img
                                src="${gpu.image}"
                                alt="${gpu.name}"
                                class="gpu-image"
                            >
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
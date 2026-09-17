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
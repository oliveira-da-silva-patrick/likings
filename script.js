const baseFolder = "pics/";
const fs = require('fs');
const files = fs.readdirSync(baseFolder);

document.addEventListener("DOMContentLoaded", async () => {

    files.forEach(filename => {
        const [category, ...rest] = filename.split("_");
        const alt = rest.join(" ").replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "");

        const targetName = category.concat('-content')
        const categoryDiv = document.getElementById(category);

        if (categoryDiv) {
            const imgElement = document.createElement("img");
            imgElement.src = `${baseFolder}${filename}`;
            imgElement.alt = alt;

            categoryDiv.appendChild(imgElement);
        }
    });
});

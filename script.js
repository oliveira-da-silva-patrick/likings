document.addEventListener("DOMContentLoaded", async () => {
    const baseFolder = "pics/";
    try {
        const response = await fetch("images.json");
        const data = await response.json();

        data.forEach(item => {
            const { filename, link } = item;
            const [category, ...rest] = filename.split("_");
            const alt = rest.join(" ").replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "");

            const targetName = category.concat('-content');
            const categoryDiv = document.getElementById(targetName);

            if (categoryDiv) {
                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.target = "_blank";

                const imgElement = document.createElement("img");
                imgElement.src = `${baseFolder}${filename}`;
                imgElement.alt = alt;

                linkElement.appendChild(imgElement);
                categoryDiv.appendChild(linkElement);
            }
        });
    } catch (error) {
        console.error("Error loading data:", error);
    }
});

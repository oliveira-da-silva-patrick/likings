document.addEventListener("DOMContentLoaded", async () => {
    const baseFolder = "pics/";
    try {
        const response = await fetch("images.json");
        const files = await response.json();

        files.forEach(filename => {
            const [category, ...rest] = filename.split("_");
            const alt = rest.join(" ").replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "");

            const targetName = category.concat('-content');
            const categoryDiv = document.getElementById(category);

            if (categoryDiv) {
                const imgElement = document.createElement("img");
                imgElement.src = `${baseFolder}${filename}`;
                imgElement.alt = alt;

                categoryDiv.appendChild(imgElement);
            }
        });
    } catch (error) {
        console.error("Error loading image data:", error);
    }
});

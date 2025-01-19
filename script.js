document.addEventListener("DOMContentLoaded", async () => {
    const baseFolder = "pics/";

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    try {
        const response = await fetch("images.json");
        let data = await response.json();

        data = shuffleArray(data);

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

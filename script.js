document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("images.json");
        let data = await response.json();

        data.forEach(item => {
            const { img, link, category, year } = item;

            const targetName = category.concat('-content');
            const categoryDiv = document.getElementById(targetName);

            if (categoryDiv) {
                const linkElement = document.createElement("a");
                linkElement.href = link;
                linkElement.target = "_blank";

                const imgElement = document.createElement("img");
                imgElement.src = `${img}`;

                linkElement.appendChild(imgElement);
                categoryDiv.appendChild(linkElement);
            }
        });
    } catch (error) {
        console.error("Error loading data:", error);
    }
});

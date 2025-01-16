const baseFolder = "pics/";

async function fetchFileList() {
    try {
        const response = await fetch(`${baseFolder}filelist.json`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching file list:", error);
        return [];
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const files = await fetchFileList();

    files.forEach(filename => {
        const [category, ...rest] = filename.split("_");
        const alt = rest.join(" ").replace(/[-_]/g, " ").replace(/\.[^/.]+$/, "");

        const categoryDiv = document.getElementById(category);

        if (categoryDiv) {
            const imgElement = document.createElement("img");
            imgElement.src = `${baseFolder}${filename}`;
            imgElement.alt = alt;

            categoryDiv.appendChild(imgElement);
        }
    });
});

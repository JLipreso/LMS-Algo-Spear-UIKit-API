export type AddImageProps = {
    id: string,
    path: string
};

export function addImage({id, path }:AddImageProps) {
    const container = document.getElementById(id);
    if (container) {
        const img               = document.createElement("img");
        img.src                 = path;
        img.alt                 = "Sample Image";
        img.style.width         = "350px";
        img.style.height        = "auto";
        container.appendChild(img);
    }
}
import { EditorErrorMessage } from "./message-error";

export type AppendHeaderProps = {
    id: string,
    tag: string,
    text: string
};

export function appendHeader({ id, tag, text }:AppendHeaderProps) {
    const container = document.getElementById(id);
    if (container) {
        const heading = document.createElement(tag);
        heading.textContent = text;
        container.appendChild(heading);
    }
    else {
        console.error(EditorErrorMessage()['CONTAINER_ERROR']);
    }
}
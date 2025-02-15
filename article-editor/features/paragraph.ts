import { EditorErrorMessage } from "./message-error";

export type AppendParagraphProps = {
    id: string,
    text: string
};

export function appendParagraph({ id, text }:AppendParagraphProps) {
    const container = document.getElementById(id);
    if (container) {
        const p = document.createElement('p');
        p.textContent = text;
        container.appendChild(p);
    }
    else {
        console.error(EditorErrorMessage()['CONTAINER_ERROR']);
    }
}
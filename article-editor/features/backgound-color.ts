export type ApplyBackgroundColorProps = {
    color: string
};

export function applyBackgroundColor({ color }: ApplyBackgroundColorProps) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return ;
    const range = selection.getRangeAt(0);
    if (range.collapsed) return ;

    let parentElement = range.commonAncestorContainer as HTMLElement;
    if (parentElement.nodeType === Node.TEXT_NODE) {
        parentElement = parentElement.parentElement as HTMLElement;
    }

    if (parentElement && parentElement.nodeName === "SPAN") {
        parentElement.style.backgroundColor = color;
        parentElement.style.padding = "3px 10px";
    }
    else {
        const span = document.createElement("span");
        span.style.backgroundColor = color;
        span.style.padding = "3px 10px";
        range.surroundContents(span);
    }
}
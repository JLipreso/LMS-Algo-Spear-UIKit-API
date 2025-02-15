export type ApplyTextFontFamilyProps = {
    font: string
};

export function applyTextFontFamily({ font }: ApplyTextFontFamilyProps) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return ;
    const range = selection.getRangeAt(0);
    if (range.collapsed) return ;

    let parentElement = range.commonAncestorContainer as HTMLElement;
    if (parentElement.nodeType === Node.TEXT_NODE) {
        parentElement = parentElement.parentElement as HTMLElement;
    }

    if (parentElement && parentElement.nodeName === "SPAN") {
        parentElement.style.fontFamily = font;
    }
    else {
        const span = document.createElement("span");
        span.style.fontFamily = font;
        range.surroundContents(span);
    }
}
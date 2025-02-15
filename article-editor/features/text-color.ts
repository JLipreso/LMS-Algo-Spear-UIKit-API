export type ApplyTextColorProps = {
    color: string
};

export function ApplyTextColor({ color }: ApplyTextColorProps) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    
    if (range.collapsed) return;

    const span = document.createElement("span");
    span.style.color = color;
    
    range.surroundContents(span);
}
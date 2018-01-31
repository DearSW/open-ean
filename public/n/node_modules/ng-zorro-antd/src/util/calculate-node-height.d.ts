export default function calculateNodeHeight(uiTextNode: HTMLTextAreaElement, useCache?: boolean, minRows?: number | null, maxRows?: number | null): {
    height: number;
    minHeight: number;
    maxHeight: number;
    overflowY: string;
};

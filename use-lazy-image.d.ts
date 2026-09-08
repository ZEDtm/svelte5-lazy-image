export default function useLazyImage(node: any, { root, rootMargin, threshold }?: {
    root?: any;
    rootMargin?: string;
    threshold?: number;
}): {
    destroy(): void;
};

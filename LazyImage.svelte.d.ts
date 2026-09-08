/** @typedef {typeof __propDef.props}  LazyImageProps */
/** @typedef {typeof __propDef.events}  LazyImageEvents */
/** @typedef {typeof __propDef.slots}  LazyImageSlots */
export default class LazyImage extends SvelteComponentTyped<{
    [x: string]: any;
    placeholder: string;
    src: string;
    alt: string;
    options?: {
        root?: any;
        rootMargin?: string;
        threshold?: number;
    };
    loaded?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LazyImageProps = typeof __propDef.props;
export type LazyImageEvents = typeof __propDef.events;
export type LazyImageSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        placeholder: string;
        src: string;
        alt: string;
        options?: {
            root?: any;
            rootMargin?: string;
            threshold?: number;
        };
        loaded?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};

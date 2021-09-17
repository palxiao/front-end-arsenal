import { ObjectDirective } from 'vue';
export interface ResizeElement extends HTMLElement {
    $resize?: CustomResize;
}
export interface ResizeOptions {
    immediate: boolean;
    direction: ResizeDirectionType[];
    scrollElSelector: string | null;
    lineColor: string;
    lineWidth: number;
    lineHoverColor: string;
    lineHoverWidth: number;
    tipLineColor: string;
    tipLineWidth: number;
    tipLineStyle: string;
    zIndex: number;
    needParentNodeOffset: boolean;
}
export interface ResizeLine extends HTMLDivElement {
    mouseoverEvent?: EventListenerOrEventListenerObject;
    mouseoutEvent?: EventListenerOrEventListenerObject;
    mousedownEvent?: EventListenerOrEventListenerObject;
}
export interface ResizeEvent extends Event {
    direction: string;
    moveOffset: number;
    moveOffsetPercent: number;
    resizeWidth?: number;
    resizeHeight?: number;
    resizeWidthPercent?: number;
    resizeHeightPercent?: number;
}
export declare type ResizeDirectionType = 'top' | 'bottom' | 'left' | 'right';
declare class CustomResize {
    private el;
    private options;
    private directionArr;
    constructor({ el, options }: {
        el: string | HTMLElement;
        options?: ResizeOptions;
    });
    init(): void;
    private createDashedLineEl;
    private createLineEl;
    destroy(): void;
}
export declare const ResizeDirective: ObjectDirective;
export default CustomResize;

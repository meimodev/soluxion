export enum ElementTypeEnum {
    image, button, custom
}

export interface ElementTypeInterface {
    type: ElementTypeEnum,
    src: string,
}
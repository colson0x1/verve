import { Model, HasId } from '../models/Model';
export declare abstract class View<T extends Model<K>, K extends HasId> {
    parent: Element;
    model: T;
    regions: {
        [key: string]: Element;
    };
    constructor(parent: Element, model: T);
    abstract template(): string;
    regionsMap(): {
        [key: string]: string;
    };
    eventsMap(): {
        [key: string]: () => void;
    };
    bindModel(): void;
    bindEvents(fragment: DocumentFragment): void;
    mapRegions(fragment: DocumentFragment): void;
    onRender(): void;
    render(): void;
}

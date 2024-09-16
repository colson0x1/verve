import { Collection } from '../models/Collection';
export declare abstract class CollectionView<T, K> {
    parent: Element;
    collection: Collection<T, K>;
    constructor(parent: Element, collection: Collection<T, K>);
    abstract renderItem(model: T, itemParent: Element): void;
    render(): void;
}

import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
export declare class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void;
}

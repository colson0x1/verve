import { View } from './View';
import { User, UserProps } from '../models/User';
export declare class UserEdit extends View<User, UserProps> {
    regionsMap(): {
        [key: string]: string;
    };
    onRender(): void;
    template(): string;
}

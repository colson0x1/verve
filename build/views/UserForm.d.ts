import { User, UserProps } from '../models/User';
import { View } from './View';
export declare class UserForm extends View<User, UserProps> {
    eventsMap(): {
        [key: string]: () => void;
    };
    onSaveClick: () => void;
    onSetNameClick: () => void;
    onSetAgeClick: () => void;
    template(): string;
}

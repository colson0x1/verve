import { Model } from './Model';
import { Collection } from './Collection';
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}
export declare class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User;
    static buildUserCollection(): Collection<User, UserProps>;
    setRandomAge(): void;
}

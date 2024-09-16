import { AxiosPromise } from 'axios';
interface ModelAttributes<T> {
    set(value: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}
interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}
interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}
export interface HasId {
    id?: number;
}
export declare class Model<T extends HasId> {
    private attributes;
    private events;
    private sync;
    constructor(attributes: ModelAttributes<T>, events: Events, sync: Sync<T>);
    on: (eventName: string, callback: () => void) => void;
    trigger: (eventName: string) => void;
    get: <K extends keyof T>(key: K) => T[K];
    set(update: T): void;
    fetch(): void;
    save(): void;
}
export {};

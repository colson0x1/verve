import { AxiosPromise } from 'axios';
interface HasId {
    id?: number;
}
export declare class ApiSync<T extends HasId> {
    rootUrl: string;
    constructor(rootUrl: string);
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}
export {};

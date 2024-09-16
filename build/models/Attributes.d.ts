export declare class Attributes<T extends object> {
    private data;
    constructor(data: T);
    get: <K extends keyof T>(key: K) => T[K];
    set(update: T): void;
    getAll(): T;
}

/// <reference types="react" />
import * as React from 'react';
export declare type Validators<T> = {
    [K in keyof T]: ((values: T) => string | false) | Validators<T[K]>;
};
export interface Props<T> {
    initial: T;
    onSubmit: (values: T) => Promise<{}> | {} | void;
    validate?: Validators<T>;
    form: (form: FuncProps<T>) => JSX.Element;
}
export declare type Errors<T> = {
    [K in keyof T]: (false | string) | Errors<T[K]>;
};
export declare type Touched<T> = {
    [K in keyof T]: boolean | Touched<T[K]>;
};
export interface FuncProps<T> {
    dirty: boolean;
    errors: Errors<T>;
    field: (key: string, comp: (handlers: Handlers<T[keyof T]>) => JSX.Element | null | void | undefined) => JSX.Element | null | void | undefined;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    invalid: boolean;
    pristine: boolean;
    submitting: boolean;
    touched: Touched<T>;
    values: T;
}
export interface Handlers<U> {
    error: string | false;
    touch: () => void;
    touched: boolean;
    update: (value: U) => void;
    value: U;
}
export interface State<T> {
    fields: T;
    touched: Touched<T>;
    submitting: boolean;
}
declare class Formie<T> extends React.Component<Props<T>, State<T>> {
    constructor(props: Props<T>);
    mounted: boolean;
    field: (key: keyof T, comp: (handlers: Handlers<T[keyof T]>) => JSX.Element) => JSX.Element;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    readonly errors: any;
    readonly invalid: boolean;
    readonly pristine: boolean;
    componentWillUnmount(): void;
    componentWillReceiveProps({initial}: Props<T>): void;
    render(): JSX.Element;
}
export default Formie;

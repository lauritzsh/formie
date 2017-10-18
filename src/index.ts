import * as React from 'react';

import {
  invalid,
  checkErrors,
  equal,
  deepMerge,
  getProp,
  setProp,
  initState,
} from './utils';

export type Validators<T> = {
  [K in keyof T]: ((values: T) => string | false) | Validators<T[K]>
};

export interface Props<T> {
  initial: T;
  onSubmit: (values: T) => Promise<{}> | {} | void;
  validate?: Validators<T>;
  form: (form: FuncProps<T>) => JSX.Element;
}

export type Errors<T> = { [K in keyof T]: (false | string) | Errors<T[K]> };

export type Touched<T> = { [K in keyof T]: boolean | Touched<T[K]> };

export interface FuncProps<T> {
  dirty: boolean;
  errors: Errors<T>;
  field: (
    key: string,
    comp: (
      handlers: Handlers<T[keyof T]>,
    ) => JSX.Element | null | void | undefined,
  ) => JSX.Element | null | void | undefined;
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

class Formie<T> extends React.Component<Props<T>, State<T>> {
  constructor(props: Props<T>) {
    super(props);

    this.state = initState(this.props.initial);
  }

  mounted = true;

  field = (
    key: keyof T,
    comp: (handlers: Handlers<T[keyof T]>) => JSX.Element,
  ) => {
    const value = getProp(this.state.fields, key);

    if (value === undefined) {
      throw new Error(`Not able to find key "${key}" in fields!`);
    }

    return comp({
      value: getProp(this.state.fields, key),
      touched: getProp(this.state.touched, key),
      error: getProp(this.errors, key),
      update: value => {
        setProp(this.state.fields, key, value);

        this.setState(state => ({
          fields: state.fields,
        }));
      },
      touch: () => {
        setProp(this.state.touched, key, true);

        this.setState(state => ({
          touched: state.touched,
        }));
      },
    });
  };

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(state => ({
      submitting: true,
    }));

    await this.props.onSubmit(this.state.fields);

    if (this.mounted) {
      this.setState(state => ({
        submitting: false,
      }));
    }
  };

  get errors() {
    return checkErrors(this.state.fields, this.props.validate);
  }

  get invalid() {
    return invalid(this.errors);
  }

  get pristine() {
    return equal(this.state.fields, this.props.initial);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentWillReceiveProps({ initial }: Props<T>) {
    const newState = initState(initial);

    this.setState(state => newState);
  }

  render() {
    const funcProps = {
      dirty: !this.pristine,
      errors: this.errors,
      field: this.field,
      handleSubmit: this.handleSubmit,
      invalid: this.invalid,
      pristine: this.pristine,
      submitting: this.state.submitting,
      touched: this.state.touched,
      values: this.state.fields,
    } as FuncProps<T>;

    return this.props.form(funcProps);
  }
}

export default Formie;

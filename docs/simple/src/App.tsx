import * as React from 'react';

import Formie from '../../..';

const Input = ({ touch, touched, error, value, update }: any) => (
  <div>
    <input
      onBlur={touch}
      value={value}
      onChange={e => update(e.target.value)}
    />
    <p>{touched && error}</p>
  </div>
);

const request = (values: any) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(values);
      resolve();
    }, 500);
  });

const initial = { name: '', address: '' };

export default () => (
  <Formie
    onSubmit={request}
    initial={initial}
    validate={{
      name: (v: string) => !v && 'Nope',
      address: (v: string) => !v && 'Nope',
    }}
    form={({
      submitting,
      pristine,
      handleSubmit,
      errors,
      field,
      values,
      touched,
      invalid,
    }) => (
      <form onSubmit={handleSubmit}>
        <pre>Values: {JSON.stringify(values, undefined, 4)}</pre>
        <pre>Errors: {JSON.stringify(errors, undefined, 4)}</pre>
        <pre>Touched: {JSON.stringify(touched, undefined, 4)}</pre>
        <pre>{pristine ? 'Pristine' : 'Not pristine'}</pre>

        {field('name', props => <Input {...props} />)}
        {field('address', props => <Input {...props} />)}
        <button disabled={invalid || pristine || submitting}>Submit</button>
      </form>
    )}
  />
);

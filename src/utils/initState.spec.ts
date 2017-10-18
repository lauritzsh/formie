import initState from './initState';

describe('initState', () => {
  it('creates a state from initial vaues', () => {
    const values = { name: '', address: { zip: '' } };

    expect(initState(values)).toEqual({
      fields: {
        name: '',
        address: {
          zip: '',
        },
      },
      touched: {
        name: false,
        address: {
          zip: false,
        },
      },
      submitting: false,
    });
  });
});

import React from 'react'
import {act, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Form} from '../Form';

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn();
  const handleClose = jest.fn();
  const props = {
      onClose: handleClose,
      onSubmit:handleSubmit,
      buttonName: 'test',
      formValues: {},
  };

  render(<Form  {...props} />);

   act(() => {
       userEvent.type(screen.getByLabelText('Title'), 'Test');
       userEvent.type(screen.getByLabelText('Release Date'), '2020-03-01');
       userEvent.type(screen.getByLabelText('Movie URL'), 'Url');
       userEvent.type(screen.getByLabelText('Overview'), 'Test');
       userEvent.type(screen.getByLabelText('Runtime'), '60');
       userEvent.click(screen.getByTestId('genres'));
       userEvent.click(screen.getByTestId('genre-Horror'));
   });

   userEvent.click(screen.getByTestId('buttonSubmit'));

   await waitFor(() =>
       expect(handleSubmit).toHaveBeenCalled()
   )
});
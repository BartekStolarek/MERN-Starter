import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders Login component with input elements and login button', async () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );

    const loginHeading = await screen.findByRole('heading', { name: /welcome back/i });

    expect(loginHeading).toBeTruthy();
  });

  test('has enabled Login input elements and login button', async () => {
    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );

    const emailInput = await screen.findByPlaceholderText(/email/i);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    const loginButton = await screen.findByRole('button', { name: /login/i });
    
    expect(emailInput).toBeEnabled();
    expect(passwordInput).toBeEnabled();
    expect(loginButton).toBeEnabled();
  });
});

import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Signup from './Signup';

describe('Signup', () => {
  test('renders Signup component', async () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    );

    const signupHeading = await screen.findByRole('heading', { name: /welcome/i });

    expect(signupHeading).toBeTruthy();
  });

  test('has enabled Signup input elements and signup button', async () => {
    render(
        <BrowserRouter>
            <Signup />
        </BrowserRouter>
    );

    const usernameInput = await screen.findByPlaceholderText(/username/i);
    const emailInput = await screen.findByPlaceholderText(/email/i);
    const passwordInput = await screen.findAllByPlaceholderText(/password/i);
    const confirmPasswordInput = await screen.findByPlaceholderText(/confirm password/i);
    const signupButton = await screen.findByRole('button', { name: /sign up/i });
    
    expect(usernameInput).toBeEnabled();
    expect(emailInput).toBeEnabled();
    expect(passwordInput[0]).toBeEnabled();
    expect(confirmPasswordInput).toBeEnabled();
    expect(signupButton).toBeEnabled();
  });
});

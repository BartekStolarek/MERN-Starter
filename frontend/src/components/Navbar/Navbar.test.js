import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component', async () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    const navbarHeading = await screen.findByRole('link', { name: /mern starter/i });

    expect(navbarHeading).toBeTruthy();
  });

  test('has valid Navbar links', async () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );

    const homeLink = await screen.findByRole('link', { name: /home/i });
    const profileLink = await screen.findByRole('link', { name: /profile/i });

    expect(homeLink).toHaveAttribute('href', '/dashboard');
    expect(profileLink).toHaveAttribute('href', '/profile');
  });
});

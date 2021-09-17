import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  test('renders Profile component', async () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    );

    const profileHeading = await screen.findByRole('heading', { name: /profile/i });

    expect(profileHeading).toBeTruthy();
  });
});

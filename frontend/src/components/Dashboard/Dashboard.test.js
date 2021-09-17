import { React } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('renders Dashboard component', async () => {
    render(
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );

    const dashboardHeading = await screen.findByRole('heading', { name: /Dashboard/i });

    expect(dashboardHeading).toBeTruthy();
  });
});

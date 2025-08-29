import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('Renderiza encabezado del Shell', async () => {
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    expect(await screen.findByText(/Rick & Morty Portal/i)).toBeInTheDocument();
});

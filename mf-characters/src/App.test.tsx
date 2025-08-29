import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';


beforeEach(() => {
  (global as any).fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      info: { next: null, prev: null, pages: 1 },
      results: []
    }),
  });
});

afterEach(() => {
  (global as any).fetch && (global as any).fetch.mockClear?.();
});

test('Renderiza título "Personajes"', () => {
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    expect(screen.getByText(/Personajes/i)).toBeInTheDocument();
});

test('Muestra estado de carga inicial', () => {
    render(
        <MemoryRouter>
            <App/>
        </MemoryRouter>
    );
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
});

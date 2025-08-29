import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { MemoryRouter, Route, Routes } from 'react-router-dom';


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

test('Muestra "Cargando…" al entrar', () => {
    render(
        <MemoryRouter initialEntries={['/character/1']}>
            <Routes>
                <Route path="/character/:id" element={<App/>}/>
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
});

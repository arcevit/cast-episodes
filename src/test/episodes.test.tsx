import { render, screen } from '@testing-library/react';
import { server } from '../testServer';
import Episodes from '../pages/Episodes';

describe('episode page', () => {
    afterEach(() => server.resetHandlers());

    test('mocked fetch episodes and find an episode name', async () => {
        render(<Episodes />);
        const episodeName = await screen.findByText(/Minimum Viable Product/i);
        expect(episodeName).toBeInTheDocument();
    });
});

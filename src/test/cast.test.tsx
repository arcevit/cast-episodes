import React from 'react';
import { render, screen } from '@testing-library/react';
import Cast, { CAST_URL } from '../pages/Cast';
import { rest, server } from '../testServer';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('cast page', () => {
    afterEach(() => server.resetHandlers());

    test('mocked fetch cast data and find a character name', async () => {
        render(<Cast />);
        const characterName = await screen.findByText(/Dan Moller/i);
        expect(characterName).toBeInTheDocument();
    });

    test('searchField value and find searched cast in cast component', async () => {
        render(<App />);
        const searchEl = await screen.findByPlaceholderText(
            /Search for cast member/i
        );
        expect(searchEl).toBeInTheDocument();
        userEvent.type(searchEl, 'Mette');
        expect(searchEl).toHaveValue('Mette');
        const name = await screen.findByText(/Mette/i);
        expect(name).toBeInTheDocument();
    });

    test('handle error', async () => {
        server.use(
            rest.get(CAST_URL, (_req, res, ctx) => {
                return res(ctx.status(404));
            })
        );
        render(<Cast />);
        const errorDiv = await screen.findByText(/Error!/i);
        expect(errorDiv).toBeInTheDocument();
    });
});

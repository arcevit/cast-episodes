import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { CAST_URL } from './pages/Cast';
import { EPISODES_URL } from './pages/Episodes';

const server = setupServer(
    rest.get(CAST_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockedCastReturn));
    }),
    rest.get(EPISODES_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockedEpisodeReturn));
    }),
    rest.get('*', (req, res, ctx) => {
        return res(
            ctx.status(500),
            ctx.json('it require to add request handler')
        );
    })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };

const mockedCastReturn = {
    _embedded: {
        cast: [
            {
                person: {
                    id: 5,
                    name: 'John',
                    country: 'Denmark',
                    birthday: '12/12/12',
                    gender: 'Male',
                    image: { medium: '' },
                },
                character: { name: 'Dan Moller' },
            },
            {
                person: {
                    id: 6,
                    name: 'Mette',
                    country: 'Denmark',
                    birthday: '12/12/12',
                    image: { medium: '' },
                },
                character: { name: 'James Bond' },
            },
        ],
    },
};

const mockedEpisodeReturn = [
    {
        id: 1,
        name: 'Minimum Viable Product',
        airdate: '2014-04-06',
        airtime: '22:00',
        airstamp: '2014-04-07T02:00:00+00:00',
        runtime: 30,

        image: {
            medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/49/123633.jpg',
        },
        season: 1,
        summary: '<p>Nice movie</p>',
    },
];

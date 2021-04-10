import PulpImage from '../assets/pulp_fiction.jpg';
import BohemianImage from '../assets/bohemian_rhapsody.jpg';
import KillBillImage from '../assets/kill_bill.jpg';
import AvengersImage from '../assets/avengers.png';
import InceptionImage from '../assets/inception.jpg';
import ReservoirImage from '../assets/reservoir_dogs.jpg';

export const MOVIES = [
    {
        image: PulpImage,
        title: 'Pulp Fiction',
        subtitle: 'Action & Adventure',
        year: 1995,
        id: 1
    },
    {
        image: BohemianImage,
        title: 'Bohemian Rhapsody',
        subtitle: 'Drama, Biography, Music',
        year: 2018,
        id: 2
    },
    {
        image: KillBillImage,
        title: 'Kill Bill: Vol 2',
        subtitle: 'Oscar winning Movie',
        year: 2004,
        id: 3
    },
    {
        image: AvengersImage,
        title: 'Avengers: War of Infinity',
        subtitle: 'Action & Adventure',
        year: 2019,
        id: 4
    },
    {
        image: InceptionImage,
        title: 'Inception',
        subtitle: 'Action & Adventure',
        year: 2010,
        id: 5
    },
    {
        image: ReservoirImage,
        title: 'Reservoir dogs',
        subtitle: 'Oscar winning Movie',
        year: 1991,
        id: 6
    },
];

export const TABS = [
    {
        label: 'All',
        value: 'All',
        id: 'tab1'
    },
    {
        label: 'Documentary',
        value: 'Documentary',
        id: 'tab2'
    },
    {
        label: 'Comedy',
        value: 'Comedy',
        id: 'tab3'
    },
    {
        label: 'Horror',
        value: 'Horror',
        id: 'tab4'
    },
    {
        label: 'Crime',
        value: 'Crime',
        id: 'tab5'
    },
];

export const DROPDOWN = [
    {
        value: 'date',
        label: 'Release Date'
    },
    {
        value: 'name',
        label: 'Name'
    },
];

export const INITIAL_VALUES = {
    title: 'Moana',
    date: '2021-01-10',
    url: 'www.moana.com',
    genre: ['Comedy'],
    overview: 'Overview text goes here',
    runtime: 123,
};

export const MOVIES_LIST = [
    {
        image: PulpImage,
        title: 'Pulp Fiction',
        subtitle: 'Action & Adventure',
        year: 1995,
        rating: 5,
        time: '150 min',
        descriptions: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption',
        id: 1
    },
    {
        image: BohemianImage,
        title: 'Bohemian Rhapsody',
        subtitle: 'Drama, Biography, Music',
        year: 2018,
        rating: 5,
        time: '150 min',
        descriptions: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
        id: 2
    },
    {
        image: KillBillImage,
        title: 'Kill Bill: Vol 2',
        subtitle: 'Oscar winning Movie',
        year: 2004,
        rating: 5,
        time: '150 min',
        descriptions: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle.',
        id: 3
    },
    {
        image: AvengersImage,
        title: 'Avengers: War of Infinity',
        subtitle: 'Action & Adventure',
        year: 2019,
        rating: 5,
        time: '150 min',
        descriptions: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
        id: 4
    },
    {
        image: InceptionImage,
        title: 'Inception',
        subtitle: 'Action & Adventure',
        year: 2010,
        rating: 5,
        time: '150 min',
        descriptions: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        id: 5
    },
    {
        image: ReservoirImage,
        title: 'Reservoir dogs',
        subtitle: 'Oscar winning Movie',
        year: 1991,
        rating: 5,
        time: '150 min',
        descriptions: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
        id: 6
    },
];

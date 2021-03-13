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
    runtime: 'Runtime text goes here',
};

export const OPTIONS = [
    {
        value: 'Crime',
        label: 'Crime',
        isChecked: 'Crime'
    },
    {
        value: 'Documentary',
        label: 'Documentary',
        isChecked: 'Documentary'
    },
    {
        value: 'Horror',
        label: 'Horror',
        isChecked: 'Horror'
    },
    {
        value: 'Comedy',
        label: 'Comedy',
        isChecked: 'Comedy'
    }
];

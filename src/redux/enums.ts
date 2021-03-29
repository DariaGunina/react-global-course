export const enum FilterKeys {
    ALL = 'all',
    DOCUMENTARY = 'documentary',
    COMEDY = 'comedy',
    HORROR = 'horror',
    CRIME = 'crime'
}

export const FilterOptions = {
    [FilterKeys.ALL]: 'All',
    [FilterKeys.DOCUMENTARY]: 'Documentary',
    [FilterKeys.COMEDY]: 'Comedy',
    [FilterKeys.HORROR]: 'Horror',
    [FilterKeys.CRIME]: 'Crime',
};

export const enum SortKeys {
    VOTE_AVERAGE = 'vote_average',
    VOTE_COUNT = 'vote_count',
    RELEASE_DATE = 'release_date',
}

export const sortOptions = {
    [SortKeys.RELEASE_DATE]: 'Release Date',
    [SortKeys.VOTE_AVERAGE]: 'Vote Average',
    [SortKeys.VOTE_COUNT]: 'Vote Count',
};
import React from 'react';
import {FilterKeys, SortKeys} from '../../redux/enums';

interface FiltersContext {
    sort: SortKeys;
    setSort: React.Dispatch<React.SetStateAction<SortKeys>>
    filter: FilterKeys;
    setFilter: React.Dispatch<React.SetStateAction<FilterKeys>>
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const FiltersContext = React.createContext<FiltersContext | null>(null);

export const FiltersProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [sort, setSort] = React.useState<SortKeys>(SortKeys.RELEASE_DATE);
    const [filter, setFilter] = React.useState<FilterKeys>(FilterKeys.ALL);
    const [search, setSearch] = React.useState<string>('');

    return (
        <FiltersContext.Provider value={{sort, filter, search, setSort, setFilter, setSearch}}>
            {children}
        </FiltersContext.Provider>
    );
};
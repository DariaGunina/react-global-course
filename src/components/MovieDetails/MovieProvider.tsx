import React from 'react';

interface MovieContext {
    activeMovie: number | null;
    setActiveMovie: (id: number | null) => void;
}

export const MovieContext = React.createContext<MovieContext>({activeMovie: null, setActiveMovie: id => null});

export const MovieProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [activeMovie, setActiveMovie] = React.useState<number | null>(null);

    return (
        <MovieContext.Provider value={{activeMovie, setActiveMovie}}>
            {children}
        </MovieContext.Provider>
    );
};
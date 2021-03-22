import React from 'react';

type ActiveMovie = number | null;

interface MovieContext {
    activeMovie: ActiveMovie;
    setActiveMovie: (id: ActiveMovie) => void;
}

export const MovieContext = React.createContext<MovieContext>({activeMovie: null, setActiveMovie: id => null});

export const MovieProvider = ({children}: React.PropsWithChildren<{}>) => {
    const [activeMovie, setActiveMovie] = React.useState<ActiveMovie>(null);

    return (
        <MovieContext.Provider value={{activeMovie, setActiveMovie}}>
            {children}
        </MovieContext.Provider>
    );
};
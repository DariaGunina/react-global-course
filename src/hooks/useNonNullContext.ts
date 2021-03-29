import React from 'react';

export const useNonNullContext = <T>(context: React.Context<T | null>) => {
    const contextValue = React.useContext(context);

    if(contextValue === null) {
        throw new Error('Provider is missing');
    }

    return contextValue;
};
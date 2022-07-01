import React, { createContext, useContext } from 'react';

export const Store = createContext();

export function useStoreContext() {
   return useContext(Store);
}

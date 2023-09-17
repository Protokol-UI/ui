import { Konfig } from './config.types';

import { createContext, useContext } from 'react';

export const KonfigContext = createContext<Konfig>({} as Konfig);

export const KonfigProvider = KonfigContext.Provider;
export const KonfigConsumer = KonfigContext.Consumer;

export const useKonfig = () => useContext(KonfigContext);

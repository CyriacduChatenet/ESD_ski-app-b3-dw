import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

import { FilterCredentials } from '@/setup/types/filterCredentials.type';

type Context = {
	credentials: FilterCredentials;
	setCredentials: Dispatch<SetStateAction<FilterCredentials>>;
};

const filterContext = createContext<Context>({
	credentials: {
		addresse: '',
		style: '',
		size: 0,
		weight: 0,
	},
	setCredentials: () => {},
});

export const FilterContextProvider = ({ children }: PropsWithChildren) => {
	const [credentials, setCredentials] = useState<FilterCredentials>({
		addresse: '',
		style: '',
		size: 0,
		weight: 0,
	});
	return <filterContext.Provider value={{ credentials, setCredentials }}>{children}</filterContext.Provider>;
};

const useFilter = () => useContext<Context>(filterContext);

export default useFilter;

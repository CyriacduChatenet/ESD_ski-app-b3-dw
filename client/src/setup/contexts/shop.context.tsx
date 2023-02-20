import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { Shop } from '@/setup/types/shop.type';

type Context = {
	data: any;
	setData: Dispatch<SetStateAction<any>>;
};

const shopContext = createContext<Context>({
	data: {},
	setData: () => {},
});

export const ShopContextProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<any>({});
	return <shopContext.Provider value={{ data, setData }}>{children}</shopContext.Provider>;
};

const useShop = () => useContext<Context>(shopContext);

export default useShop;

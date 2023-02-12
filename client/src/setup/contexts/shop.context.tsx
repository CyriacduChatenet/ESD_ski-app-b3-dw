import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { Shop } from '@/setup/types/shop.type';

type Context = {
	data: Shop[];
	setData: Dispatch<SetStateAction<Shop[]>>;
};

const shopContext = createContext<Context>({
	data: [],
	setData: () => {},
});

export const ShopContextProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<Shop[]>([]);
	return <shopContext.Provider value={{ data, setData }}>{children}</shopContext.Provider>;
};

const useShop = () => useContext<Context>(shopContext);

export default useShop;

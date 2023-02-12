import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

import { Post } from '@/setup/types/post.type';

type Context = {
	data: Post[];
	setData: Dispatch<SetStateAction<Post[]>>;
};

const postContext = createContext<Context>({
	data: [],
	setData: () => {},
});

export const PostContextProvider = ({ children }: PropsWithChildren) => {
	const [data, setData] = useState<Post[]>([]);
	return <postContext.Provider value={{ data, setData }}>{children}</postContext.Provider>;
};

const usePost = () => useContext<Context>(postContext);

export default usePost;

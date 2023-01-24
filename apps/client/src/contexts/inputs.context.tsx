import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react"

type Data = {
    addresse: string;
    setAddresse: Dispatch<SetStateAction<string>>

    weight: number;
    setWeight: Dispatch<SetStateAction<number>>

    style: string;
    setStyle: Dispatch<SetStateAction<string>>

    size: number;
    setSize: Dispatch<SetStateAction<number>>
}

const inputContext = createContext<Data>({
    addresse: '',
    setAddresse: () => {},

    weight: 0,
    setWeight: () => {},

    style: '',
    setStyle: () => {},

    size: 0,
    setSize: () => {},
});

export const InputContextProvider = ({children} : PropsWithChildren) => {
    const [addresse, setAddresse] = useState('');
    const [style, setStyle] = useState('');
    const [weight, setWeight] = useState(0);
    const [size, setSize] = useState(0);

    return (
        <inputContext.Provider value={{addresse, setAddresse, weight, setWeight, style, setStyle, size, setSize}}>
        {children}
        </inputContext.Provider>
    );
};

const UseInputs = () => useContext<Data>(inputContext);

export default UseInputs;
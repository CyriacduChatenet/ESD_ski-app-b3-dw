import { Dispatch, FC, SetStateAction, useState } from "react";

interface IProps {
    stars: number;
    setStars: Dispatch<SetStateAction<number>>;
};

export const CommentStars: FC<IProps> = ({stars, setStars}) => {
    const [displayFirstStar, setDisplayFirstStar] = useState(false);
    const [displaySecondStar, setDisplaySecondStar] = useState(false);
    const [displayThirdStar, setDisplayThirdStar] = useState(false);
    const [displayFourthStar, setDisplayFourthStar] = useState(false);
    const [displayFifthStar, setDisplayFifthStar] = useState(false);

    return (
        <div className="flex items-center justify-around w-1/2 mx-1/10 py-1 my-1 bg-gray-700">
        <button>
            {displayFirstStar || stars>=1 ? <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayFirstStar(!displayFirstStar); setStars(0);}}>
                <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayFirstStar(!displayFirstStar); setStars(1);}}>
                <path fill="#6B7280" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>}
        </button>
        <button>
            {displaySecondStar || stars>=2 ? <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplaySecondStar(!displaySecondStar); setStars(1);}}>
                <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplaySecondStar(!displaySecondStar); setStars(2);}}>
                <path fill="#6B7280" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>}
        </button>
        <button>
            {displayThirdStar || stars>=3 ? <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayThirdStar(!displayThirdStar); setStars(2);}}>
                <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayThirdStar(!displayThirdStar); setStars(3);}}>
                <path fill="#6B7280" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>}
        </button>
        <button>
            {displayFourthStar || stars>=4 ? <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1.5rem" viewBox="0 0 24 24" onClick={() => {setDisplayFourthStar(!displayFourthStar); setStars(3);}}>
                <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayFourthStar(!displayFourthStar); setStars(4);}}>
                <path fill="#6B7280" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>}
        </button>
        <button>
            {displayFifthStar || stars>=5 ? <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayFifthStar(!displayFifthStar); setStars(4);}}>
                <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" onClick={() => {setDisplayFifthStar(!displayFifthStar); setStars(5);}}>
                <path fill="#6B7280" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>}
        </button>
    </div>
    );
};
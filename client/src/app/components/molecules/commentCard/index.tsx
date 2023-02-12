import { FC } from 'react';

interface IProps {
	stars: number;
	username: string;
	description: string;
}

export const CommentCard: FC<IProps> = ({ username, description, stars }) => {
	let maxiumStars = 5;
	maxiumStars - stars;
	return (
		<article>
			<div className="flex items-center justify-around w-1/2 mx-1/10 py-1 my-1 bg-gray-700">
				{[...Array(stars)].map((e: any, index: number) => (
							<div key={index}>
								<svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
									<path
										fill="white"
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
									/>
								</svg>
							</div>
					  ))}
			</div>
			<p>
				<b>{username}</b>
			</p>
			<p>{description}</p>
		</article>
	);
};

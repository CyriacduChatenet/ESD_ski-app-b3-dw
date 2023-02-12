import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../button';

export const Navbar: FC = () => {
    const location = useLocation(); 
	return (
		<nav className="px-40 h-16 bg-indigo-400 text-white">
			<ul className="w-full h-full flex items-center justify-between">
				<li>
					<Link to={'/'} className="font-bold text-xl">
						Ski app
					</Link>
				</li>
				{location.pathname === '/' ? (
					<li>
						<Link to={'/signin'}>
							<Button label="Signin" background_color='bg-indigo-700' px='px-4' py='py-1' />
						</Link>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

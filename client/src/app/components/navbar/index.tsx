import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../button';

export const Navbar: FC = () => {
    const location = useLocation(); 
	return (
		<nav className="px-40 h-16 bg-indigo-400 text-white mb-8">
			<ul className="w-full h-full flex items-center justify-between">
				<li>
					<Link to={'/'} className="font-bold text-xl">
						{' '}
						Ski app
					</Link>
				</li>
				{location.pathname === '/' ? (
					<li>
						<Link to={'/signin'}>
							<Button label="Signin" />
						</Link>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

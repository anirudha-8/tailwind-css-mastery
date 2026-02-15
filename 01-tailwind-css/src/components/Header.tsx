const Header = () => {
	return (
		<header className="flex items-center justify-between bg-slate-900 text-white px-8 py-4">
			<div className="text-3xl font-extrabold">Logo</div>
			<nav>
				<ul className="flex gap-6 text-xl font-bold">
					<li>
						<a
							href="#home"
							className="cursor-pointer border-b-2 border-transparent transition duration-700 hover:border-white hover:text-slate-300"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="cursor-pointer border-b-2 border-transparent transition duration-700 hover:border-white hover:text-slate-300"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="cursor-pointer border-b-2 border-transparent transition duration-700 hover:border-white hover:text-slate-300"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

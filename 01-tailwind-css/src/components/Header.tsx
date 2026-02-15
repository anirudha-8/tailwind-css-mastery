const Header = () => {
	return (
		<header className="flex items-center justify-between bg-slate-900 text-white px-8 py-4">
			<div className="text-3xl font-extrabold">Logo</div>
			<nav>
				<li className="flex gap-4 text-xl font-semibold font-bold">
					<ul className="cursor-pointer hover:underline">Home</ul>
					<ul className="cursor-pointer hover:underline">About</ul>
					<ul className="cursor-pointer hover:underline">Contact</ul>
				</li>
			</nav>
		</header>
	);
};
export default Header;

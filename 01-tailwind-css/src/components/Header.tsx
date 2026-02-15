import { useState } from "react";

const links = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Contact", href: "#contact" },
];

const NavLinks = ({
	direction = "row",
	onClick,
}: {
	direction?: "row" | "col";
	onClick?: () => void;
}) => (
	<ul
		className={`flex text-xl font-bold ${
			direction === "col" ? "flex-col gap-3" : "gap-6"
		}`}
	>
		{links.map((link) => (
			<li key={link.name}>
				<a
					href={link.href}
					className="cursor-pointer border-b-2 border-transparent transition duration-700 hover:border-white hover:text-slate-300"
					onClick={onClick}
				>
					{link.name}
				</a>
			</li>
		))}
	</ul>
);

const Header = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<header className="flex items-center justify-between bg-slate-900 text-white px-8 py-4">
			{/* logo */}
			<div className="text-3xl font-extrabold">Logo</div>

			{/* desktop navbar */}
			<nav className="hidden sm:flex">
				<NavLinks />
			</nav>

			{/* hamburger icon (only visible on small screens) */}
			<button
				className="text-2xl cursor-pointer sm:hidden"
				onClick={() => setOpen(!open)}
				aria-label="Toggle navigation menu"
				aria-expanded={open}
			>
				☰
			</button>

			{/* mobile navbar */}
			{open && (
				<nav className="absolute top-full left-0 w-full bg-slate-900 sm:hidden animate-slide-down px-8 py-4">
					<NavLinks direction="col" onClick={() => setOpen(false)} />
				</nav>
			)}
		</header>
	);
};

export default Header;

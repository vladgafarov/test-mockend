import { Link, NavLink } from "@remix-run/react"

const Header = () => {
	const activeStyle = {
		textDecoration: "underline",
	}

	return (
		<header className="flex items-center p-4 bg-sky-300">
			<Link to="/">
				<h1 className="font-bold text-2xl text-sky-800">
					Welcome to Remix
				</h1>
			</Link>
			<div className="ml-auto space-x-3">
				<NavLink
					to="/posts"
					style={({ isActive }) => (isActive ? activeStyle : {})}
				>
					Posts
				</NavLink>
				<NavLink
					to="/about"
					style={({ isActive }) => (isActive ? activeStyle : {})}
				>
					About
				</NavLink>
			</div>
		</header>
	)
}

export default Header

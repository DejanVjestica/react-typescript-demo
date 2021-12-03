import { useState } from 'react'

export const LogedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const handleLogin = () => {
		setIsLoggedIn(true)
	}
	const handleLogout = () => {
		setIsLoggedIn(false)
	}

	return (
		<div>
			<button onClick={handleLogin}>Log in</button>
			<button onClick={handleLogout}>Log out</button>
			<p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
		</div>
	)
}

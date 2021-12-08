import React from 'react'
import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
	isLogedIn: boolean
	component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLogedIn, component: Component }: PrivateProps) => {
	if (isLogedIn) return <Component name={'Dejan'} />
	else return <Login />
}

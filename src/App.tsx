import React from 'react'
import './App.css'
import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import { Status } from './components/Status'
import { Heading } from './components/Heading'
import { Oscar } from './components/Oscar'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Container } from './components/Container'
import { LogedIn } from './components/state/LogedIn'
// import { User } from './components/state/User'
import { Counter } from './components/state/Counter'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'

function App() {
	const person = {
		first: 'Dejan',
		last: 'Vjestica'
	}

	const listOfPersons = [
		{ first: 'Dejan', last: 'Vjestica' },
		{ first: 'Zsofi', last: 'Oroszi' },
		{ first: 'Marko', last: 'Vjestica' }
	]

	return (
		<div className="App">
			<Heading>logo logo</Heading>
			<LogedIn></LogedIn>
			{/* <User></User> */}
			<Counter></Counter>

			<Greet name="Dejan" isLogedIn={true}></Greet>
			<Person name={person}></Person>
			<PersonList names={listOfPersons}></PersonList>
			<Status status={'success'}></Status>
			<Oscar>
				<Heading>Oscar gors to Leo</Heading>
			</Oscar>
			<Button
				handleClick={(event, id = 2) => {
					console.log('click', event)
				}}
			></Button>
			<Input
				value=""
				handleChange={(event) => {
					console.log(event)
				}}
			></Input>
			<Container
				styles={{
					border: 'solid 1px red',
					padding: '1rem'
				}}
			></Container>

			<ThemeContextProvider>
				<Box></Box>
			</ThemeContextProvider>
			<UserContextProvider>
				<User></User>
			</UserContextProvider>
		</div>
	)
}

export default App

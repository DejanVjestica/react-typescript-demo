type GreetProps = {
	name: string
	messageCount?: number
	isLogedIn: boolean
}

export const Greet = (props: GreetProps) => {
	const { messageCount = 0 } = props
	return (
		<div>
			<h2>
				{props.isLogedIn
					? `Hallo ${props.name} you have ${messageCount} 
				unread message`
					: 'Please login'}
			</h2>
		</div>
	)
}

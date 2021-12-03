type StatusProps = {
	status: 'success' | 'loading' | 'error'
}

export const Status = (props: StatusProps) => {
	let message

	if (props.status === 'loading') {
		message = 'loading...'
	} else if (props.status === 'success') {
		message = 'fetched'
	} else if (props.status === 'error') {
		message = 'error fetching'
	}

	return (
		<div>
			<h2>Status {message}</h2>
		</div>
	)
}

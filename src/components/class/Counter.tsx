import { Component } from 'react'

type CounterProps = {
	message: string
}

type CounterState = {
	count: number
}

export class CounterClss extends Component<CounterProps, CounterState> {
	state = {
		count: 1
	}

	handleClick = () => {
		this.setState((prevState) => ({ count: prevState.count + 1 }))
	}

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>increment</button>
				{this.props.message} {this.state.count}
			</div>
		)
	}
}

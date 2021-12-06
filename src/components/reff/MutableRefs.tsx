import { useState, useRef, useEffect } from 'react'

export const MutableRefs = () => {
	const [timer, setTimer] = useState(0)
	const interValRef = useRef<number | null>(null)

	const stopTimer = () => {
		if (interValRef.current) window.clearInterval(interValRef.current)
	}

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer((timer) => {
				return timer + 1
			})
		}, 1000)
		return () => {
			stopTimer()
		}
	}, [])
	return (
		<div>
			Hook timer {timer}
			<button onClick={() => stopTimer()}>stop timer</button>
		</div>
	)
}

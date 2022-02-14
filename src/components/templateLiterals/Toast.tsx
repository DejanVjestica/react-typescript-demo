type HorisontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
	position:
		| Exclude<`${HorisontalPosition}-${VerticalPosition}`, 'center-center'>
		| 'center'
}

export const Toast = ({ position }: ToastProps) => {
	return <div> Toast position notification - {position} </div>
}

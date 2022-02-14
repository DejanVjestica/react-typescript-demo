type HorisontalPosition = 'top' | 'center' | 'bottom'
type VerticalPosition = 'left' | 'center' | 'right'

type ToastProps = {
	position:
		| Exclude<`${HorisontalPosition}-${VerticalPosition}`, 'center-center'>
		| 'center'
}

export const Toast = ({ position }: ToastProps) => {
	return <div> Toast position notification - {position} </div>
}

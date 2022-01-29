type ListProps<T> = {
	items: T[]
	onClick: (value: T) => void
}

export const List = <T extends string | number | boolean>({
	items,
	onClick
}: ListProps<T>) => {
	return (
		<div>
			<h2>Lorem ipsum</h2>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => onClick(item)}>
						{item}
					</div>
				)
			})}
		</div>
	)
}

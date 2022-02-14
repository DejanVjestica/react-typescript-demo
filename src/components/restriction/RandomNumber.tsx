type RandomTypeNumber = {
	value: number
}

type PositiveNumber = RandomTypeNumber & {
	isPositive?: boolean
	isNegative?: never
	isZero?: never
}

type NegativeNumber = RandomTypeNumber & {
	isNegative?: boolean
	isPositive?: never
	isZero?: never
}

type ZeroNumber = RandomTypeNumber & {
	isZero?: boolean
	isPositive?: never
	isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber = ({
	value,
	isPositive,
	isNegative,
	isZero
}: RandomNumberProps) => {
	return (
		<div>
			{value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
			{isZero && 'zero'}
		</div>
	)
}

type HeadingProps = { children: string }

export const Heading = (props: HeadingProps) => {
	return <header>{props.children}</header>
}

import { ContainerStyle } from "./Container.styles"

export default function Container(props: { children: any }) {
    const {children} = props
    return (
        <ContainerStyle>{children}</ContainerStyle>
    )
}

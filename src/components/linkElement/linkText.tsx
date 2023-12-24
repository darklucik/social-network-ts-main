import { Link } from "react-router-dom"

type linkProps = {
    path: string
    LinkText: string
}


export const LinkText = ({path,LinkText}:linkProps) => {
    return (
        <Link to={path}>{LinkText}</Link>
    )
}
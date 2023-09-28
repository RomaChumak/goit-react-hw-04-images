import { LoadMore } from "./LoadMore.styled"
export const Button = ({ onLoad }) => {
    return(<LoadMore type="button" onClick={onLoad}>Load more</LoadMore> )
}
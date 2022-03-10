import { Link } from "react-router-dom"

export default function OrderBy({sort_by}) {
    return (
        <div>
        <button as={Link} to={`/articles?sort_by=${sort_by}&order_by=ASC`} >ASC</button>
        <button as={Link} to={`/articles?sort_by=${sort_by}&order_by=DESC`}>DESC</button>
        </div>
    )
}
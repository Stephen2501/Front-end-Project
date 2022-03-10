import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function SortByDropdown() {

    return (
    <Dropdown>
        <Dropdown.Toggle
            variant='success'
            id='dropdown-sortby-button'
            title='Sort-By'>
            Sort By
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item
                as={Link}
                to={'/articles?sortby=created_at'} 
                sortby="created_at">
                Date
            </Dropdown.Item>

            <Dropdown.Item
                as={Link}
                to={'/articles?sortby=comment_count'} >
                Comment Count
            </Dropdown.Item>

            <Dropdown.Item
                as={Link}
                to={'/articles?sortby=votes'} >
                Votes
            </Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
    )
}
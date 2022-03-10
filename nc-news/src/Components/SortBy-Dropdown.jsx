import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function SortByDropdown({setSortBy}) {

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
                onClick={() => setSortBy('created_at')}
                as={Link}
                to={'/articles?sort_by=created_at'} 
                sortby="created_at">
                Date
            </Dropdown.Item>

            <Dropdown.Item
                onClick={() => setSortBy('comment_count')}
                as={Link}
                to={'/articles?sort_by=comment_count'} >
                Comment Count
            </Dropdown.Item>

            <Dropdown.Item
                onClick={() => setSortBy('votes')}
                as={Link}
                to={'/articles?sort_by=votes'} >
                Votes
            </Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
    )
}
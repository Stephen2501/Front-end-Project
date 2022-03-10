// import Dropdown from 'react-bootstrap/Dropdown';

// export default function SortByDropdown({setSortBy}) {

//     return (<Dropdown>
//         <Dropdown.Toggle
//             variant='success'
//             id='dropdown-sortby-button'
//             title='Sort-By'>
//             Sort By
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//             <Dropdown.Item
//                 onClick={() => {
//                     setSortBy('created_at');
//                 }}
//                 key='date'>
//                     <Link to={'/articles/date'} setArticles={setArticles}
//                 Date
//             </Dropdown.Item>

//             <Dropdown.Item
//                 onClick={() => {
//                     setSortBy('comment_count');
//                 }}
//                 key='comment_count'>
//                 Comment Count
//             </Dropdown.Item>

//             <Dropdown.Item
//                 onClick={() => {
//                     setSortBy('votes');
//                 }}
//                 key='votes'>
//                 Votes
//             </Dropdown.Item>

//             <Dropdown.Item
//                 onClick={() => {
//                     setSortBy('');
//                 }}>
//                 Reset
//             </Dropdown.Item>
//         </Dropdown.Menu>
//     </Dropdown>
//     )
// }
export default function OrderMsg({orderBy, sortBy}) {

    let sort = "";
    if(sortBy === "created_at") sort = "date";
    if(sortBy === "votes") sort = "votes";
    if(sortBy === "comment_count") sort = "comment count";
    if(orderBy === 'ASC') { 
        return <h3>Lowest to Highest {sort}</h3>
    } else {
        return <h3>Highest to Lowest {sort}</h3>
    }
}
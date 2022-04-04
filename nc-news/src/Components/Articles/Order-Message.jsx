export default function OrderMsg({orderBy}) {
    if(orderBy === 'ASC') {
        return <h3>Lowest to Highest</h3>
    } else {
        return <h3>Highest to Lowest</h3>
    }
}
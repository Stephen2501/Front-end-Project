

export default function OrderBy({setOrderBy}) {
    return (
        <div >
        <button className="order-buttons" id='ASC' onClick={() => setOrderBy('ASC')} >High to low ↑↓</button>
        <button className="order-buttons" id='DESC' onClick={() => setOrderBy('DESC')}>Low to high ↓↑</button>
        </div>
    )
}
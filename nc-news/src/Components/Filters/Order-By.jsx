

export default function OrderBy({setOrderBy}) {
    return (
        <div >
        <button className="order-buttons" id='ASC' onClick={() => setOrderBy('ASC')} >Low to high ↓↑</button>
        <button className="order-buttons" id='DESC' onClick={() => setOrderBy('DESC')}>High to low ↑↓</button>
        </div>
    )
}
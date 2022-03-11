

export default function OrderBy({setOrderBy}) {
    return (
        <div>
        <button id='ASC' onClick={() => setOrderBy('ASC')} >ASC</button>
        <button id='DESC' onClick={() => setOrderBy('DESC')}>DESC</button>
        </div>
    )
}
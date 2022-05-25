const React = require('react')
const Default = require('./layouts/default')

function Show({ bread }) {
    return (
        <Default>
            <h2>Show page</h2>
            <h3>{bread.name}</h3>
            <p>
                and it { bread.hasGluten ? <span> does </span> : <span> does Not </span>}
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name}></img>
            <a href={`/breads/${bread._id}/edit`}><button>Edit</button></a>
            <form method='POST' action={`/breads/${bread._id}?_method=DELETE`}>
                <input type="submit" value="DELETE" />
            </form>
        </Default>
    )
}
module.exports = Show
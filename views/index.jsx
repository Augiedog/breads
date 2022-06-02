const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads, title, bakers } ) {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        <div className='newBttn'>
            <a href='/breads/new'><button>Add bread</button></a>
        </div>
        <h3>Bakers</h3>
        <ul>
            {
                bakers.map((baker) => {
                    return (
                        <li key={baker.id}>
                            <a href={`/baker/${baker.id}`}>{baker.name}</a>
                        </li>
                    )
                })
            }
        </ul>
        <div>
        <h3>Breads</h3>
        <ul>
            {
                breads.map((bread) => {
                    return (
                        <li key={bread.id}>
                            <a href={`/breads/${bread._id}`}>
                                {bread.name}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    </Default>
    )
    
}
module.exports = Index
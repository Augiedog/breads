const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads, title } ) {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        <div className='newBttn'>
            <a href='/breads/new'><button>Add bread</button></a>
        </div>
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
    </Default>
    )
    
}
module.exports = Index
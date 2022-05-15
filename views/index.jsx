const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/default')

function Index({ breads, title } ) {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        <ul>
            {
                breads.map((bread, index) => {
                    return (
                        <li key={index}>
                            <a>{bread.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    </Default>
    )
    
}
module.exports = Index
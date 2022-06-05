const React = require('react')
const Default = require('./layouts/default')

function Error() {
    return (
        <Default title="!!Error 404!!">
            <main>
                <img src='https://http.cat/404' alt='404 page'></img>    
            </main>
        </Default>
    )
}

module.exports = Error
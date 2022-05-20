const React = require('react')
const Default = require('./layouts/default')

function Edit({ bread, index }) {
    return (
        <Default>
            <h2>Edit Page</h2>
            <form method='POST' action={`/breads/${index}?_method=PUT`}>
                <label htmlFor='name'>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={bread.name}
                    required
                />
                <label htmlFor="image">Image</label>
                <input 
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={bread.image}
                />
                <label htmlFor='hasGluten'>Has Gluten</label>
                <input
                    type="checkbox"
                    name="hasGluten"
                    id="hasGluten"
                    defaultChecked={bread.hasGluten}
                     />
                <br></br>
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit
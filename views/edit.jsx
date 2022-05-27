const React = require('react')
const Default = require('./layouts/default')

function Edit({ bread }) {
    return (
        <Default>
            <h2>Edit Page</h2>
            <form method='POST' action={`/breads/${bread._id}?_method=PUT`}>
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
                 <br />
                 <select name="baker" id="baker">
                    <option value="Rachel">Rachel</option>
                    <option value="Monica">Monica</option>
                    <option value="Joey">Joey</option>
                    <option value="Chandler">Chandler</option>
                    <option value="Phoebe">Phoebe</option>
                </select>
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit
const React = require('react')
const Default = require('./layouts/default')

function Edit({ bread, bakers }) {
    return (
        <Default title="Edit page">
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
                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker" defaultValue={bread.baker._id}>
                {  
                    bakers.map((baker) => {
                        return (
                            <option value={baker.id} key={baker.id}>{baker.name}</option>
                        )
                    })
                }
                </select>
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit
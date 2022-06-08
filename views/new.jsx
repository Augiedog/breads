const React = require('react')
const Baker = require('../models/bakers')
const Default = require('./layouts/default')

function New ({ bakers }) {
    return (
      <Default title="New Bread">
        <h2>Add a new bread</h2>
        <form action='/breads' method='post'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
          />
          <br />
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {
              bakers.map((Baker) => {
                return (
                  <option value={Baker.id} key={Baker.id}>{Baker.name}</option>
                )
              })
            }
          </select>
          <br />
          <input type="submit"/>
        </form>
        <div className='backBttn'>
            <a href='/breads'><button>Back</button></a>    
        </div>
      </Default>
    )
}

module.exports = New

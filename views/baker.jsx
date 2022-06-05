const React = require('react')
const Default = require('./layouts/default')

function Show ({ baker }) {
    return (
      <Default title={baker.name}>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <p>Breads {baker.name} has baked</p>
          <ul>
              {    
                  baker.breads.map(bread => {
                      return (
                          <a href={`/breads/${bread.id}`}><li key={bread._id}>{bread.name}</li></a>
                      )
                  })
              }
          </ul>
      </Default>
    )
}

module.exports = Show
const React = require('react')
const Default = require('./layouts/default')

function Show ({ baker }) {
    return (
      <Default>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <p>Breads {baker.name} has baked</p>
          <ul>
              {    
                  baker.breads.map(bread => {
                      return (
                          <li key={bread._id}>{bread.name}</li>
                      )
                  })
              }
          </ul>
      </Default>
    )
}

module.exports = Show
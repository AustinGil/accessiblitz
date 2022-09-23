import Card from './Card.jsx'

describe('<Card>', () => {
  it('mounts', () => {
    cy.mount(<Card />)
  })
})
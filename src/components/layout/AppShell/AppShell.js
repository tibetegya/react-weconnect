import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar'
import Footer from '../Footer'

const AppShell = props => {
  return (
    <div data-testid="app-shell">
      <Navbar />
      AppShell
      <Footer />
    </div>
  )
}

AppShell.propTypes = {

}

export default AppShell

import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../redux/store'
import { defaultTheme } from './themes'

const AllTheProviders = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
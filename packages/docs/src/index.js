import React from 'react'
import Layout from './components/layout'

export { default as Layout } from './components/layout'
export * from './components/blocks'
export { default as DemoProvider } from './components/demo-provider'
export { default as Note } from './components/note'
export { default as Logo } from './components/logo'
export { default as RecipeCard } from './components/recipe-card'

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>

/* eslint-env jest */
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import NewComponent from '../src/components/New'

test.skip('Store starts blank', () => {
  const { getByText } = render(NewComponent, { name: 'World' })

  expect(getByText('Hello World!')).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
test.skip('changes button text on click', async () => {
  const { getByText } = render(NewComponent, { name: 'World' })
  const button = getByText('Button')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(button).toHaveTextContent('Button Clicked')
})

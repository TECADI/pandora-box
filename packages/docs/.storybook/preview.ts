import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Home',
          'Design System',
          'Layout',
          'Components',
          'Data Entry',
          'Typography',
        ],
        alphabetically: true,
      },
    },
  },
}

export default preview

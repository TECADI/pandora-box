import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  base: 'dark',
  brandTitle: 'Logi360 logo',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
})

addons.setConfig({
  theme: theme,
})

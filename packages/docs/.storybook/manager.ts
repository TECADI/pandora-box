import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  base: 'dark',
  brandTitle: 'Logi360 logo',
  brandUrl: 'https://tecadi.github.io/pandora-box/?path=/docs/home--docs',
  brandImage: 'https://i.ibb.co/0KgpVQK/logo-pandora.png',
  brandTarget: '_self',
})

addons.setConfig({
  theme: theme,
})

import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  MultiStep,
  MultiStepProps,
} from '@pandora-box-tecadi/desing-ui-react'

export default {
  title: 'Typography/Multi Step',
  component: MultiStep,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 1,
  },
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 4,
    currentStep: 4,
  },
}

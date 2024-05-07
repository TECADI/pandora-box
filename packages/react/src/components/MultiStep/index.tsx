import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currentStep: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        passo {currentStep} de {size}
      </Label>

      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, i) => (
          <Step key={i} active={currentStep > i}></Step>
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'

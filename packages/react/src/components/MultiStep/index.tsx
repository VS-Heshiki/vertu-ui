import { Label, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
    steps: number,
    activeStep?: number
}

export function MultiStep ({ steps, activeStep = 1 }: MultiStepProps) {
    return (
        <MultiStepContainer>
            <Label>Step { activeStep } of { steps }</Label>
            <Steps css={ { '--number-steps': steps } }>
                { Array.from({ length: steps }, (_, i) => i + 1).map(step => {
                    return (
                        <Step key={ step } active={ activeStep >= step }></Step>
                    )
                }) }
            </Steps>
        </MultiStepContainer>
    )
}

MultiStep.displayName = 'MultiStep'

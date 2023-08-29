import { ComponentProps } from 'react'
import { InputContainer, TextInput, Prefix } from './styles'

export interface TextInputProps extends ComponentProps<typeof TextInput> {
    prefix?: string
}

export function TextInputArea ({ prefix, ...props }: TextInputProps) {
    return (
        <InputContainer>
            { !!prefix && <Prefix>{ prefix }</Prefix> }
            <TextInput { ...props } />
        </InputContainer>
    )
}

TextInput.displayName = 'TextInput'

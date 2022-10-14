import {Meta, StoryObj} from '@storybook/react';
import { TextInput, TextInputRootProps } from "./TextInput";


export default {
    title: 'components/TextInput',
    component: TextInput.Root, 
    args: { 
        children:(
            <TextInput.Input placeholder="Type your e-mail adress"/>
        ),
    },
    argTypes: {    
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = { }



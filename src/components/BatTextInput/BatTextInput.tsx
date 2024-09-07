import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyle';

interface BatTextInputProps {
    pass: string
}

export function BatTextInput(props: BatTextInputProps) {
    return (
        <TextInput
            editable={false}
            style={styles.Input}
            placeholder='Pass...'
            placeholderTextColor={'#fff'}
            value={props.pass} />

    );
}
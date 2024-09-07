import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import GeneratePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('');

    function generatePass() {
        const pass = GeneratePass();
        setPass(pass);
    }

    function copyPass() {
        Clipboard.setStringAsync(pass);
        alert("Password copied!")
    }

    return (
        <>
            <BatTextInput pass={pass} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => generatePass()}>
                <Text style={styles.text}>
                    GENERATE
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => copyPass()}>
                <Text style={styles.text}>
                    COPY
                </Text>
            </TouchableOpacity>
        </>
    );
}
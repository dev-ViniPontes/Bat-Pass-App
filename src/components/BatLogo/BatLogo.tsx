import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './BatLogoStyle';
import Logo from "../../../assets/bat-logo.png";

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>
                BAT PASS GENERATOR
            </Text>
            <Image source={Logo} style={styles.image} />
        </>
    );
}
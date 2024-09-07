import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    logoContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "auto",
        borderColor: "#fff",
        borderWidth: 2,
        marginTop: 75,
        marginBottom: 70,
        backgroundColor: "#fff",
        gap: 50
    },
    ButtonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        height: "auto",
        gap: 15,
    }
});

export default styles
import React from 'react';
import { Text, View } from 'react-native';

export default function Header () {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>HEADER!!</Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: "#F8F8F8",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        shadowColor: "#EEEEEE",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
}
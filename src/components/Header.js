import React from 'react';
import { Text, View } from 'react-native';

export default function Header(props) {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
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
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export function Input(props){
    
    const { label, value, onChangeText, placeholder, secureTextEntry } = props;
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                value={value}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                underlineColorAndroid = "#f8f8f8"
                autoCorrect={false}
                style={inputStyle}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = {
    inputStyle: {
        color: "#000",
        paddingRight: 8,
        paddingLeft: 8,
        fontSize: 18,
        lineHeight: 12,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 16,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}
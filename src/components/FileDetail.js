import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

export default function FileDetail(props){

    const { title, artist, thumbnail_image, image, url } = props.file;
    const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, imageStyle} = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={headerTextStyle}>{artist}</Text>
                </View>
            </CardSection>

            {/* We won't need the image below for the files, however we can reuse the buttons by modifying the styling of it*/}
            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={()=>Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
};

const styles = {
    headerContentStyle:{
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle:{
        fontSize: 18
    },
    thumbnailStyle: {
        height: 70,
        width: 70,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 8,
        marginRight: 8
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
import React from 'react';
import { View, Text } from 'react-native';

//will just show data to user
//presentational component

//(props) is receiving the props being passed down
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
       
    );
};

export default AlbumDetail;
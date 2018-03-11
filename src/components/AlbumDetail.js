import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

//will just show data to user
//presentational component

//(props) is receiving the props being passed down
const AlbumDetail = (props) => {
    return (
        <Card>
            <CardItem>
                <Text>{props.album.title}</Text>
            </CardItem>
        </Card>
       
    );
};

export default AlbumDetail;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//state is a plain js object that is available to class baeed components only
//used to record and respond to user-triggers events in component
//when we need to update what a component shows we are going to call setState
//only use this.setState, never use this.state


//props is for parent to child communication

class AlbumList extends Component { //this is a class based component

    //componentWillMount will run when app first gets launched. before anything
    //is rendered
    componentWillMount() {
        //declare an initial state 
        state = { albums: [] };
        //fetching data
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            //this is the request handler
            .then(response => this.setState({albums: response.data})); //fetching list of albums
    }
    render() {
        console.log(this.state)
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    };
 }
    
export default AlbumList;
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

//state is a plain js object that is available to class baeed components only
//used to record and respond to user-triggers events in component
//when we need to update what a component shows we are going to call setState


//props is for parent to child communication

class AlbumList extends Component { //this is a class based component
            //declare an initial state 
            state = { albums: [] };

    //componentWillMount will run when app first gets launched. before anything
    //is rendered
    componentWillMount() {
        //fetching data
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            //this is the request handler
            //only use this.setState, never use this.state
            .then(response => this.setState({albums: response.data})); //fetching list of albums
    }

    //this is a helper method
    //mapping over the albums to pull out each album
    //since we are writing in JSX, the variable needs to wrapped in {}
    renderAlbums() {
        return this.state.albums.map(album => 
            //album={album} is passing the variable album as a prop to
            //albumdetail component
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
 }
    
export default AlbumList;
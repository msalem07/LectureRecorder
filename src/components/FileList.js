import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import FileDetails from './FileDetail';

export default class FileList extends Component {
    
    state = {
        files: []
    };

    componentWillMount() {
        console.log("Component Will Mount");
        //debugger; //Used as a breakpoint
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then((response)=>{
            this.setState({files: response.data});
        });
    }
    renderFiles() {
        return this.state.files.map((file)=>{
            return <FileDetails key={file.title} file={file}/>
        });
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderFiles()}
            </ScrollView>
        );
    }
    
};
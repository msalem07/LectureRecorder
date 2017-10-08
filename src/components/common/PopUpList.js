import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { Header, ListItem } from './';

class PopUpListComponent extends Component {

    renderRow({item}){
        return <ListItem library={item} />
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Header headerText={"Tech Stach"}/>
                <FlatList 
                data={this.props.libraries}
                renderItem={this.renderRow}
                keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
};
const mapStateToProps = state =>{
    
    return {
        libraries: state.libraries
    };
};

export const PopUpList = connect(mapStateToProps)(PopUpListComponent);
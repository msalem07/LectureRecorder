import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './';
import * as actions from '../../actions';

class ListItemComponent extends Component {

    renderDescription() {

        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render(){

        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        console.log(this.props);
        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles =  {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 16
    }
}
const mapStateToProps = (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {
        expanded,
    }
}
export const ListItem = connect(mapStateToProps,actions)(ListItemComponent)
import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Main extends Component {
constructor(props){
super(props);
this.state={
    Text:''
}
}
render(){
    return(
        <View>
            <Text>Main View</Text>
        </View>
    )
}
}
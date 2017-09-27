import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

export default class Wellcome extends Component {
constructor(props){
super(props);
this.state={
    Text:''
}
}
render(){
    return(
        <View>
            <Image
                style={{width:100,height:100}}
                source={require('../../Images/Start-view2.png')}
            />
        </View>
    )
}
}
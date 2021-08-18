import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Style';

export default function Home(props) 
{
    console.log(props);
    return (
    <View style={css.container}>

        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
<Image
source={require('../assets/img/login.png')}/>

</TouchableOpacity>

<TouchableOpacity onPress={()=>props.navigation.navigate('Rastreio')}>
<Image
source={require('../assets/img/rastreio.png')}/>

</TouchableOpacity>

    </View>
    );
}
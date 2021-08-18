import React from 'react';
import {Text, View} from 'react-native';

export default function Rastreio(props) 
{
return(
    <View>
        <Text>Esse é o componenete Rastreio {props.route.params.id}</Text>
    </View>

    );
}
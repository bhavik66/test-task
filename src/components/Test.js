import React from 'react';
import { View, Text } from 'react-native';

import SubComponent from './SubComponent'

const Test = ({data}) => {
    return (
        <View>
            <Text>{data.name}</Text>
            <Text>{data.age}</Text>
            <SubComponent salary={data.salary} />
        </View>
    )
}

export default Test;
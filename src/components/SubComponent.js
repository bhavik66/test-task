import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';

const SubComponent = ({salary}) => {

    const [tempSalary, setSalary] = useState(salary)

    return (
        <View>
            <Text>{tempSalary}</Text>
            <Button title={'Change Salary'} onPress={() => setSalary(tempSalary * 2)} />
        </View>
    )
}

export default SubComponent;
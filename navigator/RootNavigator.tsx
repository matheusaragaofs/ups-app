import { View, Text } from 'react-native'
import React from 'react'
// import { createNativeStackNavigator   } from '@react-navigation/stack';
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


export type RootStackParamList = {
    Main: undefined;
    MyModal: { userId: string; name: string }
    Order: { order: any }
}
const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {

    return (
            <RootStack.Navigator>
                <RootStack.Group>
                    <RootStack.Screen name='Main' component={TabNavigator} />
                </RootStack.Group>

                <RootStack.Group
                    screenOptions={{

                        presentation: "modal"
                    }}
                >
                    <RootStack.Screen options={{
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid
                    }} name='MyModal' component={ModalScreen} />
                </RootStack.Group>

            </RootStack.Navigator>
    )
}

export default RootNavigator
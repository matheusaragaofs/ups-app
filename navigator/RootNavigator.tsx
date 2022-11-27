import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';


export type RootStackParamList = {
    Main: undefined;
    MyModal: { userId: string; name: string }
    Order: { order: Order }
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

                <RootStack.Group>
                    <RootStack.Screen name='Order' component={OrderScreen}/>
                </RootStack.Group>

            </RootStack.Navigator>
    )
}

export default RootNavigator
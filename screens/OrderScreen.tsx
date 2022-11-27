import { View, Text } from 'react-native'
import React , { useLayoutEffect } from 'react'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/RootNavigator'
import { useTailwind } from 'tailwind-rn/dist'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import DeliveryCard from '../components/DeliveryCard'
type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>

export type OrdersScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>
const OrderScreen = () => {
    const tw = useTailwind()
    const navigation = useNavigation<OrdersScreenNavigationProps>()
    const { params: { order } } = useRoute<OrderScreenRouteProp>()
 
    useLayoutEffect(() => {
            navigation.setOptions({
                headerTitle: order.trackingItems.customer.name,
                headerTitleStyle: { color: "black"},
                headerBackTitle: "Deliveries",
                headerTintColor: "#eb6a7c",

            })
    }, [order])

    return (
        <View style={tw('-mt-2')}>
            <DeliveryCard order={order} fullWidth/>
        </View>
    )
}

export default OrderScreen
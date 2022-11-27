import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'

type Props = {
    order: Order

}
const OrderCard = ({ order }: Props) => {
    const tw = useTailwind()
    return (
        <TouchableOpacity>
            <Card containerStyle={tw('px-5 rounded-lg')}>
                <View style={tw('flex-row justify-between items-center')}>
                    <View>
                        <Icon
                            name='truck-delivery'
                            color={"#eb6a7c"}
                            type='material-community'
                        />
                        <Text style={{ fontSize: 10 }}>
                            {new Date(order?.createdAt).toDateString()}
                        </Text>
                    </View>

                    <View>
                        <Text style={[tw('text-gray-400'), { fontSize: 10 }]}>{order.carrier}-{order.trackingId}</Text>
                        <Text style={tw('text-gray-500 text-xl')}>{order.trackingItems.customer.name}</Text>
                    </View>

                    <View style={tw('flex-row items-center')}>
                        <Text style={[tw('text-sm'), { color: "#eb6a7c" }]}>{order.trackingItems.items.length} x</Text>
                        <Icon style={tw('ml-2')} name='box' type='feather' />
                    </View>
                </View>

            </Card>
        </TouchableOpacity>
    )
}

export default OrderCard
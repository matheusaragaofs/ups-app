import { ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import { Image, Input } from '@rneui/themed'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS } from '../graphql/queries'
import CustomerCard from '../components/CustomerCard'
import useOrders from '../hooks/useOrders'

export type CustomerScreenNavigationProps = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, 'Customers'>,
    NativeStackNavigationProp<RootStackParamList>
>

const CustomersScreen = () => {
    const tw = useTailwind()
    const navigation = useNavigation<CustomerScreenNavigationProps>()
    const [input, setInput] = useState<string>('')
    const { data, loading, error } = useQuery(GET_CUSTOMERS)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView style={{ backgroundColor: '#59C1CC' }}>
            <Image
                source={{ uri: 'https://links.papareact.com/3jc' }}
                containerStyle={tw('w-full h-64')}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Input
                containerStyle={tw('bg-white pt-5 pb-0 px-10')}
                value={input}
                onChangeText={setInput}
                placeholder='Search by Costumer' />

            {data?.getCustomers?.
                filter((customer: CustomerList) => customer.value?.name?.includes(input)).
                map(({ name: id, value: { name, email } }: CustomerResponse) => (
                    <CustomerCard key={id} email={email} name={name} userId={id} />
                ))}
        </ScrollView>

    )
}

export default CustomersScreen
import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import { GET_ORDERS } from '../graphql/queries'

const useCustomerOrders = (userId: string) => {

    const { data, loading, error } = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        if (!data) return

        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Lat: value.Lat,
            Lng: value.Lng,
            Address: value.Address,
            City: value.City,

        }))
        const customerOrders = orders.filter(order => order.trackingItems.customer_id === userId)
        setOrders(customerOrders)
    }, [data, userId])

    return {
        loading, error, orders
    }
}

export default useCustomerOrders
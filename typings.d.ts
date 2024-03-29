type Customer = {
    email: string;
    name: string;
}

type CustomerList = { 
    name: ID;
    value: Customer
}

type Order= {
    carrier: string;
    createdAt: string;
    shippingCost: number;
    trackingId: string;
    trackingItems: TrackingItems;
    Lat: number;
    Lng: number;
    Address: string
    City: string

}

type Item = {
    item_id: ID;
    name: string;
    price: number;
    quantity: number
}

type TrackingItems = {
    customer: Customer
    customer_id: string;
    items: Item[]
}

type OrderResponse = {
    value: Order
}

type CustomerResponse = {
    name: ID;
    value: Customer
}
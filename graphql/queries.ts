import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;


export const GET_ORDERS = gql`
  query GetOrders   {
    getOrders {
      value {
        Lat
        Lng
        carrier
        City
        Address
        shippingCost
        createdAt
        trackingId
        trackingItems {
          customer {
            email
            name
          }
          customer_id
          items {
            item_id
            price
            quantity
            name
          }
        }
      }
    }
  }
`;
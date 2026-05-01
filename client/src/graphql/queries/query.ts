import { gql } from "@apollo/client";


export const GET_ALL_USERS = gql`#graphql
    query GetUsers {
        users {
            _id
            firstName
            email
            role
        }
    }
`


export const ADD_USER = gql`#graphql
    mutation AddUser($firstName: String!, $email: String!, $password: String!) {
        createUser(firstName: $firstName, email: $email, password: $password) {
            _id
        }
    }

`
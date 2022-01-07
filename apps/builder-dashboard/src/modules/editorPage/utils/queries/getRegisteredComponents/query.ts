import { gql } from '@apollo/client';

export const GET_REGISTERED_COMPONENTS = gql`
  query GetRegisteredComponents {
    registeredComponents {
      data {
        id
        attributes {
          name
          style
          props {
            ... on ComponentPropPropString {
              id
              name
              valueString
            }
            ... on ComponentPropPropNumber {
              id
              name
              valueNumber
            }
          }
        }
      }
    }
  }
`;

export const CREATE_REGISTERED_COMPONENTS = gql`
  mutation CreateRegisteredComponent($data: RegisteredComponentInput!) {
    createRegisteredComponent(data: $data) {
      data {
        id
        attributes {
          name
          style
          props {
            ... on ComponentPropPropString {
              id
              name
              valueString
            }
            ... on ComponentPropPropNumber {
              id
              name
              valueNumber
            }
          }
        }
      }
    }
  }
`;

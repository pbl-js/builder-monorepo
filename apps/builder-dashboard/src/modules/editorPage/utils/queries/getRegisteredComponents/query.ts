import { gql } from '@apollo/client';

export const GET_REGISTERED_COMPONENTS = gql`
  query GetRegisteredComponents {
    registeredComponents {
      data {
        id
        attributes {
          name
          jsxElement
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

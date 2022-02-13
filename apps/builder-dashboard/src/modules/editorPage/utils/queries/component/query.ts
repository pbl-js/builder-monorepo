import { gql } from '@apollo/client';

export const UPDATE_COMPONENT = gql`
  mutation UpdateComponent($id: ID!, $data: ComponentInput!) {
    updateComponent(id: $id, data: $data) {
      data {
        id
        attributes {
          componentType
          jsxName
          layerName
          parentId
          styles
          inputs {
            __typename
            ... on ComponentPropsStringProp {
              id
              name
              valueString
            }
            ... on ComponentPropsNumberProp {
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

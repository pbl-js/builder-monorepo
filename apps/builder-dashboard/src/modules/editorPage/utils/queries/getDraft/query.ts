import { gql } from '@apollo/client';

export const GET_DRAFT = gql`
  query Draft($id: ID) {
    draft(id: $id) {
      data {
        id
        attributes {
          name
          targeting
          components {
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
      }
    }
  }
`;

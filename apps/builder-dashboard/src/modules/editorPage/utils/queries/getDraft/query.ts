import { gql } from '@apollo/client';

export const GET_DRAFT = gql`
  query Draft($id: ID) {
    draft(id: $id) {
      data {
        id
        attributes {
          name
          content
        }
      }
    }
  }
`;

import { gql } from 'graphql-request';

export const GET_TEXTS = gql`
  query getTexts {
    connectTexts {
      id
      createdAt
      updatedAt
      title
      slug
      content {
        html
      }
      validity
    }
  }
`;

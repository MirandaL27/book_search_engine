import { gql } from '@apollo/client';

export const QUERY__GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      books {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
  `;
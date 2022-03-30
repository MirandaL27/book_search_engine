import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation saveBook($input: input) {
    saveBook(input: $input) {
      _id
      email
      username
      bookCount
      books {
        title
        bookId
        description
        image
        link
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId) {
    addReaction(bookId: $bookId) {
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
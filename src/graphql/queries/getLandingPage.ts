import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  fragment logo on LandingPage {
    logo {
      url
      alternativeText
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
    }
  }
`;

export default GET_LANDING_PAGE;

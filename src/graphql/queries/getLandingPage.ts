import { gql } from 'graphql-request';

const GET_LANDING_PAGE = gql`
  fragment image on UploadFile {
    url
    alternativeText
  }

  fragment logo on LandingPage {
    logo {
      ...image
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        ...image
      }
      button {
        label
        url
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`;

export default GET_LANDING_PAGE;

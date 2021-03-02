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

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        ...image
      }
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      techIcons {
        icon {
          url
        }
        title
      }
    }
  }

  fragment sectionConcept on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcept
    }
  }
`;

export default GET_LANDING_PAGE;

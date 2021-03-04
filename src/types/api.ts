export type Image = {
  alternativeText: string;
  url: string;
};

export type Button = {
  label: string;
  url: string;
};

export type TechIcon = {
  icon: {
    url: string;
  };
  title: string;
};

export type Concept = {
  title: string;
};

export type Module = {
  title: string;
  subtitle: string;
  description: string;
};

export type SocialLInk = {
  title: string;
  url: string;
};

export type Author = {
  photo: Image;
  name: string;
  role: string;
  socialLinks: SocialLInk[];
  description: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  image: Image;
  button: Button;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: Image;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: Concept[];
};

export type SectionModulesProps = {
  title: string;
  modules: Module[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type SectionpricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: Button;
};

export type SectionAboutUsProps = {
  title: string;
  authors: Author[];
};

export type LandingPageProps = {
  logo: Image;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: SectionpricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
};

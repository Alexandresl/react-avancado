export type ImageProps = {
  alternativeText: string;
  url: string;
};

export type ButtonProps = {
  label: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  image: ImageProps;
  button: ButtonProps;
};

export type LandingPageProps = {
  logo: ImageProps;
  header: HeaderProps;
};

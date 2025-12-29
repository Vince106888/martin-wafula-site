export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Performance Analysis of Internetworked Communication Systems under Variable Load",
    authors: "M. Wafula, J. Smith",
    venue: "IEEE International Conference on Communications (ICC)",
    year: 2024,
    link: "https://doi.org/xxxx",
  },
];

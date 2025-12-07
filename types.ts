export interface SlideProps {
  isActive: boolean;
}

export enum SlideIndex {
  Title = 0,
  Problem = 1,
  Solution = 2,
  Market = 3,
  WhyNow = 4,
  Product = 5,
  Competition = 6,
  BusinessModel = 7,
  // Traction = 8,
  // GoToMarket = 8,
  Team = 8,
  Finance = 9,
  // Roadmap = 11,
  Closing = 10
}

export const TOTAL_SLIDES = 11;
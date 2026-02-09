
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'Run' | 'Workshop' | 'Social';
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

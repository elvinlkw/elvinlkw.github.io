export type Section =
  | 'FRONTEND'
  | 'BACKEND'
  | 'DEVOPS'
  | 'VERSION_CONTROL'
  | 'OPERATING_SYSTEMS'
  | 'AGILE'
  | 'TESTING';

export type Skill = {
  name: string;
  icon: string;
  section: Section[];
  rating: number;
};

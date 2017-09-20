export interface DisplayConfig {
  display: string;
  term: string;
  page: number;
  length: number;
  sort: number;
  guid: string;
}

export const DisplayConfigInitialState = {
  display: 'grid',
  term: '',
  page: 0,
  length: 20,
  sort: 1,
  guid: ''
};

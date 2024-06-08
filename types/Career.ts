export type CareerEnvironment =
  | string
  | [string, { version?: string | number }?];
export type CareerEnvironmentList = { [key: string]: CareerEnvironment[] };

export interface Career {
  id: number;
  title?: string;
  detail?: string;
  times?: {};
  teams?: {};
  environments?: CareerEnvironmentList;
}

export type User = {
  id: string;
  email: string;
  roles: string[];
};

export type LoginForm = {
  username: string;
  password: string;
};

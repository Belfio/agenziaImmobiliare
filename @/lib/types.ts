export type User = {
  id: string;
  email: string;
  roles: string[];
};

export type LoginForm = {
  username: string;
  password: string;
};

export type Cred = {
  username: string;
  passwordHash: string;
  createdAt: string;
  userId: string;
};

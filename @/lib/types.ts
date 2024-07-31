export type User = {
  id: string;
  email: string;
  roles: string[];
  createdAt: string;
  name: string;
  avatar: string;
  surname: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type Cred = {
  email: string;
  passwordHash: string;
  createdAt: string;
  userId: string;
};

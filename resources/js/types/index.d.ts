export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  image: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
};

export interface History {
  // columns
  id: number;
  rice_id: number | null;
  rice_name: string;
  rice_variety: string;
  recent_activity: string;
  created_at: string | null;
  updated_at: string | null;
  // relations
  rice: Rice;
}

export interface Rice {
  // columns
  id: number;
  name: string;
  variety: string;
  full_stock: number;
  current_stock: number;
  price: number;
  created_at: string | null;
  updated_at: string | null;
  // relations
  transactions: Transaction[];
  histories: History[];
}

export interface Transaction {
  // columns
  id: number;
  rice_id: number | null;
  rice_name: string;
  rice_variety: string;
  payment_method: string;
  price: number;
  created_at: string | null;
  updated_at: string | null;
  // relations
  rice: Rice;
}

export interface User {
  // columns
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password?: string;
  remember_token?: string | null;
  created_at: string | null;
  updated_at: string | null;
  // relations
  notifications: DatabaseNotification[];
}

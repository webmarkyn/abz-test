export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
};

export type Users = {
  loading: boolean;
  data: User[];
  error: boolean;
  end: boolean;
};

export type UsersAPIResponse = {
  success: boolean;
  page: number;
  total_pages: number;
  users: User[];
};

export type UploadingStateData = {
  loading: boolean;
  error: boolean;
};

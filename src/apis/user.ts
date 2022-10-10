import axios from "axios";

export type UserRoleType = "user" | "admin";

export interface GetUserRolesRes {
  userType: UserRoleType;
}

export const getUserRole = async () => {
  return axios.get<GetUserRolesRes>("https://mysite.com/api/role");
};

export interface FetchUserRes {
  id: string;
  name: string;
}

export const fetchUser = async () => {
  return axios.get<FetchUserRes>("https://mysite.com/api/users");
};

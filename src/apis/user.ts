import axios from "axios";

export type UserRoleType = "user" | "admin";

export interface GetUserRolesRes {
  userType: UserRoleType;
}

export const getUserRole = async () => {
  return axios.get<GetUserRolesRes>("https://mysite.com/api/role");
};

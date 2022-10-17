import axios from "axios";
// import { getUserRole } from "apis/user";
import * as Users from "apis/user";

jest.mock("axios");

// test("should fetch users", () => {
//   const users = [{ name: "Bob" }];
//   const resp = { data: users };

//   // axios中是没有mockResolvedValue的。
//   axios.get.mockResolvedValue(resp);

//   return Users.all().then((data) => {
//     expect(data).toEqual(users);
//   });
// });

// 使用 jest.spyOn()
// 使用下面的方法根本就无法运行
// test("should fetch users", () => {
//   const users = [{ name: "Bob" }];
//   const resp = { data: users };

//   jest.spyOn(axios, "get").mockResolvedValue(resp);

//   return Users.all().then((data: any) => {
//     expect(data).toEqual(users);
//   });
// });

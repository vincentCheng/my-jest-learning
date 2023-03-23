import { rest } from "msw";

const handlers = [
  rest.get("https://mysite.com/api/role", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        // userType: "user",
        results: [{ name: { title: "Mr", first: "Oskari", last: "Wirtanen" } }],
      })
    );
  }),
];

export default handlers;

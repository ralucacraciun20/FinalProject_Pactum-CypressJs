const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

describe("User auth", () => {
  let authToken = "";

  before(async () => {
    request.setDefaultTimeout(10000);
    const requestBody = {
      email: "test1234@mail.com",
      password: "12345677",
    };
    const response = await spec()
      .post("https://practice.expandtesting.com/notes/api/users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);

    authToken = response.body.data.token;
  });

  it("Anth user ", async () => {
    await spec()
      .get("https://practice.expandtesting.com/notes/api/users/profile")
      .withHeaders("x-auth-token", authToken)
      .inspect()
      .expectStatus(200);
  });
});

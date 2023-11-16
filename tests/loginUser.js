const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

describe("Login user ", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Login user ", async () => {
    const requestBody = {
      email: "test1234@mail.com",
      password: "12345677",
    };
    await spec()
      .post("https://practice.expandtesting.com/notes/api/users/login")
      .withBody(requestBody)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(200);
  });
});

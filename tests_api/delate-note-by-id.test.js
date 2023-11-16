const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const baseUrl = "https://practice.expandtesting.com/notes/api/";

describe("delete notes", () => {
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

  it("Delete notes by id ", async () => {
    await spec()
      .delete(baseUrl + "notes/" + "6555f88654df310141aead75")
      .withHeaders("x-auth-token", authToken)

      .expectStatus(404);
  });
});

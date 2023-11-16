const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const userName = faker.internet.userName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const baseUrl = "https://practice.expandtesting.com/notes/api/";

describe("POST register user ", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Post register users - valid scenario", async () => {
    const requestBody = {
      name: userName,
      email: randomEmail,
      password: randomPassword,
    };
    await spec()
      .post(baseUrl + "users/register")
      .withBody(requestBody)
      .expectStatus(201);
    it("Post register users - fail scenario", async () => {
      const requestBody = {
        name: userName,
        email: "santino.rogahn85@hotmail.com",
        password: randomPassword,
      };
      await spec()
        .post(baseUrl + "users/register")
        .withBody(requestBody)
        .expectStatus(409);
    });
  });
});

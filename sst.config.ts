/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "gl1",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const AUTH_SECRET = "yyc4ysfXKZVuj35h62X9qhjEP73BVqhRtxe/kLa44ok=";
    const tableCreds = new sst.aws.Dynamo("Credentials", {
      fields: {
        email: "string",
      },
      primaryIndex: { hashKey: "email" },
    });

    new sst.aws.Remix("GL1", {
      link: [tableCreds],
      environment: {
        AUTH_SECRET: AUTH_SECRET,
      },
    });
  },
});

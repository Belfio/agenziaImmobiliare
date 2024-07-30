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
    const tableUser = new sst.aws.Dynamo("Credentials", {
      fields: {
        userId: "string",
        username: "string",
      },
      primaryIndex: { hashKey: "username" },
    });

    const webRemix = new sst.aws.Remix("GL1", {
      link: [tableUser],
    });

    return {
      remix: webRemix.url,
    };
  },
});

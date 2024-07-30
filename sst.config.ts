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
    const tableCreds = new sst.aws.Dynamo("Creds", {
      fields: {
        username: "string",
      },
      primaryIndex: { hashKey: "username" },
    });

    const webRemix = new sst.aws.Remix("GL1", {
      link: [tableCreds],
    });

    return {
      remix: webRemix.url,
    };
  },
});

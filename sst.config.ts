// eslint-disable-next-line @typescript-eslint/triple-slash-reference
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
    const tableProperties = new sst.aws.Dynamo("Properties", {
      fields: {
        propertyId: "string",
        region: "string",
      },
      primaryIndex: { hashKey: "propertyId" },
      globalIndexes: {
        RegionIndex: {
          hashKey: "region",
        },
      },
    });
    const tableTarget = new sst.aws.Dynamo("Targets", {
      fields: {
        targetId: "string",
        userId: "string",
      },
      primaryIndex: { hashKey: "targetId" },
      globalIndexes: {
        UserIndex: {
          hashKey: "userId",
        },
      },
    });

    new sst.aws.Remix("AGIM", {
      link: [tableCreds, tableProperties, tableTarget],
      environment: {
        AUTH_SECRET: AUTH_SECRET,
      },
      domain:
        $app.stage === "prod"
          ? {
              name: "gl1.tech",
              dns: sst.cloudflare.dns(),
            }
          : undefined,
    });
  },
});

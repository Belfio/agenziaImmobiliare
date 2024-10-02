/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Credentials: {
      name: string
      type: "sst.aws.Dynamo"
    }
    GL1: {
      type: "sst.aws.Remix"
      url: string
    }
    Properties: {
      name: string
      type: "sst.aws.Dynamo"
    }
    Targets: {
      name: string
      type: "sst.aws.Dynamo"
    }
  }
}
export {}

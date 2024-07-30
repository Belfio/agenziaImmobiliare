/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    Creds: {
      name: string
      type: "sst.aws.Dynamo"
    }
    GL1: {
      type: "sst.aws.Remix"
      url: string
    }
  }
}
export {}

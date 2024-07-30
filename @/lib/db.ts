import { Resource } from "sst";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { Cred } from "./types";

const client = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const get = async (key: string, keyValue: string, tableName: string) => {
  console.log("get", key, keyValue, tableName);
  let res;
  try {
    res = await client.send(
      new GetCommand({
        TableName: tableName,
        Key: {
          [key]: keyValue,
        },
      })
    );
  } catch (error) {
    console.log("Error", error);
  }
  console.log("Item", res);
  return res?.Item;
};

const create = async (data: any, tableName: string) => {
  await client.send(
    new PutCommand({
      TableName: tableName,
      Item: data,
    })
  );
};

const db = {
  cred: {
    get: async (username: string): Promise<Cred> => {
      return get("username", username, Resource.Creds.name);
    },
    create: async (data: Cred) => {
      return create(data, Resource.Creds.name);
    },
  },
};

export default db;

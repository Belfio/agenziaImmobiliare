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
type createType = Cred;
type returnCreateType =
  | { data: createType; status: "ok" }
  | { error: string; status: "error" };
const create = async (
  data: createType,
  tableName: string
): Promise<returnCreateType> => {
  try {
    await client.send(
      new PutCommand({
        TableName: tableName,
        Item: data,
      })
    );
    return { data, status: "ok" };
  } catch (error) {
    console.log("Error", error);
    return { error: JSON.stringify(error) || "Error", status: "error" };
  }
};

const db = {
  cred: {
    get: async (email: string): Promise<Cred | undefined> => {
      return get("email", email, Resource.Credentials.name) as Promise<Cred>;
    },
    create: async (data: Cred) => {
      return create(data, Resource.Credentials.name);
    },
  },
};

export default db;

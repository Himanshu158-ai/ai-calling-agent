import {VapiClient} from "@vapi-ai/server-sdk";
import dotenv from "dotenv";
import {config} from "../config/config";
dotenv.config();

const vapi = new VapiClient({
  token: config.vapiPrivateKey,
});

export async function callUser(task: string): Promise<void> {
  console.log(`Calling user for: ${task}`);

  await vapi.calls.create({
    phoneNumberId: config.vapiPhoneNumberId,
    customer: {
      number: config.userPhoneNumber,
    },
    assistantId: config.vapiAssistentId,
    assistantOverrides: {
      variableValues: {
        task: task,
      },
    },
  });

  console.log("Call placed successfully!");
}
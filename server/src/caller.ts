import {VapiClient} from "@vapi-ai/server-sdk";
import dotenv from "dotenv";
dotenv.config();

const vapi = new VapiClient({
  token: process.env.VAPI_PRIVATE_KEY!,
});

export async function callUser(task: string): Promise<void> {
  console.log(`📞 Calling user for: ${task}`);

  await vapi.calls.create({
    phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID!,
    customer: {
      number: process.env.USER_PHONE_NUMBER!,
    },
    assistantId: process.env.VAPI_ASSISTANT_ID!,
    assistantOverrides: {
      variableValues: {
        task: task,
      },
    },
  });

  console.log("✅ Call placed successfully!");
}
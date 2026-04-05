import dotenv from "dotenv";

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI!,
    vapiPrivateKey: process.env.VAPI_PRIVATE_KEY!,
    vapiAssistentId:process.env.VAPI_ASSISTANT_ID!,
    userPhoneNumber:process.env.USER_PHONE_NUMBER!,
    twililPhoneNumber:process.env.TWILIO_PHONE_NUMBER!,
    vapiPhoneNumberId:process.env.VAPI_PHONE_NUMBER_ID!,
};
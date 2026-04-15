# 📞 AI Accountability Calling Agent (Voice AI + LLMs)

An AI-powered calling agent that helps users stay productive by calling them and reminding them about their tasks.
Unlike traditional reminders, this system interacts with users in real-time, motivates them, and ensures task completion through intelligent conversations.

---

## 📌 Features

* 🤖 AI-powered task accountability agent
* 📞 Automated reminder calls to users
* 🗣️ Natural conversation using LLMs
* 🎙️ Speech-to-Text (STT) for understanding user responses
* 🔊 Text-to-Speech (TTS) for human-like voice replies
* 💬 Dynamic conversation handling (multi-turn dialogue)
* 💪 Motivational responses if user refuses task
* ⏰ Task scheduling and reminder system

---

## 🧠 How It Works

1. User sets a task with a specific time
   → Example: "Wake me up at 6 AM for gym"

2. At the scheduled time, AI initiates a call
   → Reminder call is triggered automatically

3. User responds during the call
   → Voice input is captured and converted to text (STT)

4. AI responds intelligently:

   * If user agrees → confirms task
   * If user refuses → motivates and encourages

5. Conversation continues until closure
   → Ensures user engagement and accountability

---

## 🔄 Workflow

Task Setup → Scheduler → AI Call → STT → LLM → Decision Logic → TTS → User Interaction 🔁

---

## 🛠️ Tech Stack

* Backend: Node.js / ts
* Voice API: Vapi / telephony APIs
* Number: Twilio
* Speech Processing: STT + TTS
* Database: MongoDB
* Scheduler: Cron Jobs / Queue system

---

## ⚙️ Installation

git clone https://github.com/your-username/your-repo-name
cd your-repo-name
npm install / pip install -r requirements.txt
npm run dev / python app.py

---

## 🔐 Environment Variables

Create a `.env` file:

port: process.env.PORT || 3000,
mongoURI: process.env.MONGODB_URI!,
vapiPrivateKey: process.env.VAPI_PRIVATE_KEY!,
vapiAssistentId:process.env.VAPI_ASSISTANT_ID!,
userPhoneNumber:process.env.USER_PHONE_NUMBER!,
twililPhoneNumber:process.env.TWILIO_PHONE_NUMBER!,
vapiPhoneNumberId:process.env.VAPI_PHONE_NUMBER_ID!,

---

## 🌍 Use Cases

* ⏰ Daily routine reminders (wake up, gym, study)
* 📚 Student productivity assistant
* 💼 Work task accountability
* 🧠 Habit building & discipline system
* 🎯 Personal AI coach

---

## 📈 Future Improvements

* 📊 User behavior tracking & analytics
* 🧠 Personalized motivation strategies
* 🌐 Multi-language voice support
* 📱 Mobile app integration
* 📅 Calendar sync (Google Calendar, etc.)

---

## 💡 Key Insight

This project demonstrates how AI voice agents can go beyond simple reminders by actively engaging users, influencing behavior, and improving productivity through conversational accountability.

---

## 🙌 Contribution

Feel free to fork and contribute to this project!

---

## ⭐ Support

If you found this project useful, give it a ⭐ on GitHub!

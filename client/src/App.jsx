import { useEffect, useState } from "react";
import { Check, Trash2, Plus, Bell } from "lucide-react";
import axios from "axios";

export default function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [tasks, setTasks] = useState([]);

  async function addTask(props) {
    if (task.trim() === "") return;
    try {
      const res = await axios.post("http://localhost:3000/create-task", { task, scheduledTime: time });
      console.log(res.data.message);
    } catch (error) {
      console.log(error);
    }
    setTask("");
    setTime("");
  }


  useEffect(() => {
    async function getTasks() {
      try {
        const res = await axios.get("http://localhost:3000/get-tasks");
        setTasks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTasks();
  }, [])


  return (
    <div className="flex h-screen bg-[#070707] text-white">
      {/* main */}
      <div className="flex-1 p-4 md:p-10 overflow-y-auto">

        {/* header */}
        <div className="flex items-center gap-3 mb-8 justify-center">
          <h2 className="text-2xl font-medium tracking-wide">
            Your <span className="text-white/50 text-xl">MODERN</span> Reminder
          </h2>
        </div>

        {/* add card */}
        <div className="
          bg-white/[0.03]
          backdrop-blur-2xl
          border border-white/10
          p-5
          rounded-2xl
          mb-8
          shadow-[0_0_40px_rgba(255,255,255,0.03)]
          flex flex-col md:flex-row gap-3
          ">

          <input
            type="text"
            placeholder="Add task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="
              flex-1
              bg-white/[0.03]
              border border-white/10
              px-4 py-3
              rounded-xl
              outline-none
              focus:border-white/20
              "
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="
              bg-white/[0.03]
              border border-white/10
              px-4 py-3
              rounded-xl
              focus:border-white/20
              "
          />

          <button
            onClick={addTask}
            className="
              bg-white/[0.05]
              hover:bg-white/[0.08]
              px-6 py-3
              rounded-xl
              transition
              flex items-center gap-2
              "
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        {/* tasks */}
        <div className="space-y-4">
          {(tasks).map((t) => (
            <TaskCard
              key={t._id}
              id={t._id}
              task={t.task}
              scheduledTime={t.scheduledTime}
              completed={t.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskCard({
  id,
  task,
  scheduledTime,
  completed
}) {

  async function deleteTask(id) {
    try {
      await axios.delete(
        `http://localhost:3000/delete-task/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={`
    backdrop-blur-2xl
    border
    p-5
    rounded-2xl
    flex justify-between items-center
    transition
    shadow-[0_0_30px_rgba(255,255,255,0.02)]

    ${completed
        ? "bg-green-500/10 border-green-500/20"
        : "bg-white/[0.03] border-white/10 hover:bg-white/[0.05]"
      }
    `}>

      <div className="flex flex-col gap-[0.5rem]">
        <p className={`
        text-[18px]
        ${completed && "text-green-400"}
        `}>
          {task}
        </p>

        <p className="text-xs text-gray-400 flex items-center gap-1">
          <Bell size={15} />
          {scheduledTime}
        </p>

      </div>

      <div className="flex gap-2">
        {completed && (
            <span className="
            flex
            justify-center
            items-center
          text-[11px]
          text-green-400
          bg-green-500/8
          px-2 py-1
          rounded-md
          w-fit
          ">
              Completed
            </span>
          )}
        <button
          onClick={() => deleteTask(id)}
          className="bg-white/[0.05] hover:bg-white/[0.08] p-2 rounded-lg transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
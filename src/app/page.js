import { Footer } from "../../public/components/Footer";
import { Task } from "../../public/components/Task";
import { TaskInput } from "../../public/components/TaskInput";
import { Header } from "../../public/components/Header";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Jetsadawut Papherata"
        studentId="650610753"
      />
    </div>
  );
}

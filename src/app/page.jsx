import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="flex bg-[#FAFAFA] w-screen h-screen">
      <div className="flex-none">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow overflow-y-scroll">
        <Navbar />
        <div className="p-6 w-[100%]">
          <Content />
        </div>
      </div>
    </main>
  );
}

import API from "./api";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-center font-bold">Project</h1>
      <div className="flex justify-center">
        <API />
      </div>
    </main>
  );
}

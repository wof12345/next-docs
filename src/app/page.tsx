import Button from "@/lib/components/Buttons/Button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Next Docs</h1>

        <ul className="">
          <li className="text-md">
            A <b>simple</b> documentation creator
          </li>

          <li className="text-md my-4">
            <Button>Create</Button> or <span className="font-bold">Select</span>{" "}
            a document
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}

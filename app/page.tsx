import Image from "next/image";
import { ReactElement } from "react";
import UserList from "../features/UserList/UserList";

const Home = (): ReactElement => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10">
        <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] border border-zinc-200 bg-white p-10 shadow-sm shadow-zinc-200/50 dark:border-zinc-700 dark:bg-zinc-950">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Esta es una tarea nueva de usuario con lista editable.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
              Agrega un nuevo usuario usando el campo de texto y elimina los elementos desde la lista cuando lo necesites.
            </p>
          </div>
        </div>

        <UserList />
      </main>
    </div>
  );
};

export default Home;

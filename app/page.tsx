import React, { Suspense } from "react";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import "../src/app/styles/globals.css";
// import styles from "./page.module.css";
import Link from "next/link";
import TodosList from "./(user)/todos/TodosList";
import Search from "./(user)/search/Search";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* // <main className={styles.main}> */}
      <div className="flex flex-col space-y-10">
        <Suspense
          fallback={<p className="text-green-500">Loading the Todos...</p>}
        >
          <h1 className="text-3xl font-bold underline text-red-500">
            Loading Todos
          </h1>
          <div className="flex space-x-2">
            {/* @ts-ignore */}
            <TodosList />
          </div>
        </Suspense>

        <Suspense
          fallback={
            <p className="text-yellow-400">Loading the Shopping Trolley...</p>
          }
        >
          <h1>Loading shopping Trolley</h1>

          <div className="flex space-x-2">
            {/* @ts-ignore */}
            <TodosList />
          </div>
        </Suspense>
      </div>

      <div className=" flex pt-10 space-y-5">
        <Search />
      </div>

      <Link href="/pages/about.tsx">Pages</Link>
      {/* 
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col text-center">
        <h1 className="text-3xl mb-16 font-extrabold">Gift me</h1>
        <h2 className="text-xl mb-4">Make lists.</h2>
        <h2 className="text-xl mb-4">Share them.</h2>
        <h2 className="text-xl mb-4">Get what you want.</h2>
      </div>
      <div className="mt-10">
        <button className="rounded-full m-4 bg-yellow-700 p-2">Sign up</button>
        <button className="rounded-full m-4 bg-yellow-700 p-2">Sign in</button>
      </div>
    </main>
  );
}

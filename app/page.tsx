import Image from 'next/image';
// import LikeButton from './like-button';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        Welcome to a React playground!
      </h1>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Every technology you use deserves a little playground to mess around with and have some working example of each
        technique in it. Growing it over time as you need to solve interesting problems and being able to get back to
        reference those solutions is a huge benefit I should have started earlier in my career. This one will be devoted
        to React demonstrations and grow over time.
      </p>
      <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        This site was created with the Next.js framework for React which handles routing, image display, and much more.
      </p>
      <div className="flex justify-center w-full">
        <a
          className="flex justify-center align-center h-12 items-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        </a>
      </div>
      {/* <LikeButton /> */}
    </div>
  );
}

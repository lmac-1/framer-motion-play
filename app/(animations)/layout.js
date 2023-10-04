import Link from "next/link";

export default function AnimationLayout({ children }) {
  return (
    <>
      <Link
        className="underline block text-center underline-offset-2 mt-3 hover:underline-offset-4 hover:text-purple-700"
        href="/"
      >
        Home
      </Link>
      {children}
    </>
  );
}

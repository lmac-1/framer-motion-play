import Link from "next/link";

const navigation = [
  { link: "/scroll/image", label: "Image scroll" },
  { link: "/scroll/progress", label: "Scroll progress" },
  { link: "/basic", label: "Basic animations" },
];

export default function Home() {
  return (
    <main className="mt-20 max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold text-purple-700">
        Framer Motion Playground
      </h1>
      <nav>
        <ul className="mt-8">
          {navigation.map(({ link, label }, index) => (
            <li key={index} className="mt-4">
              <Link
                className="underline underline-offset-2 hover:underline-offset-4 hover:text-purple-700"
                href={link}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}

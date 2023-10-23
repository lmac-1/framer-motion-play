import Link from "next/link";

const navigation = [
  { link: "/basic", label: "Basic animations" },
  { link: "/scroll/progress", label: "Scroll progress" },
  { link: "/scroll/image", label: "Multiple image scroll examples" },
  {
    link: "/scroll/image2",
    label: "Image scroll (left to right) with large viewport",
  },
  {
    link: "/scroll/scroll1",
    label: "As you scroll, a div enters from the left and zooms to full screen",
  },
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

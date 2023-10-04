import ImageGrid from "@/app/components/ImageGrid";
import LoremIpsum from "@/app/components/LoremIpsum";

export default function Home() {
  return (
    <main className="mt-20 space-y-10 overflow-hidden w-screen">
      <div className="mx-auto max-w-md">
        <h1 className="text-3xl mb-3">Image scroll animation</h1>
        <p>
          <strong>
            This page includes different scroll animations of an image gallery.
            Scroll down the page to see.
          </strong>
        </p>
      </div>

      <LoremIpsum className="mx-auto max-w-md" />
      <ImageGrid />
      <LoremIpsum className="max-w-md mx-auto" />
      <ImageGrid animationStyle="opacity" />
      <LoremIpsum className="max-w-md mx-auto" />
      <ImageGrid animationStyle="scale" />
      <LoremIpsum className="max-w-md mx-auto" />
    </main>
  );
}

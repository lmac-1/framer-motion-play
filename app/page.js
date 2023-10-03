import { AnimationGrow } from "./components/AnimationGrow";
import { AnimationWithKeyFrames } from "./components/AnimationWithKeyFrames";

export default function Home() {
  return (
    <main className="mt-20 flex justify-center">
      <div className="flex gap-20">
        <AnimationGrow />
        <AnimationWithKeyFrames />
      </div>
    </main>
  );
}

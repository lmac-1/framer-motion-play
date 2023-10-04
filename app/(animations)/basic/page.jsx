import { AnimationGrow } from "@/app/components/AnimationGrow";
import { AnimationWithKeyFrames } from "@/app/components/AnimationWithKeyFrames";

export default function Home() {
  return (
    <main className="mt-20 flex justify-center">
      <div className="flex justify-around w-3/5">
        <AnimationGrow />
        <AnimationWithKeyFrames />
      </div>
    </main>
  );
}

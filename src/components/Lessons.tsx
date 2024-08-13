import { Video } from "lucide-react";

type LessonsProps = {
  title: string;
  duration: string;
};

export function Lessons({ title, duration }: LessonsProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zin">
      <Video className="w-4 h-4 text-zinc-500" />

      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}

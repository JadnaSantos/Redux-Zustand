import { PlayCircle, Video } from "lucide-react";

type LessonsProps = {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
};

export function Lessons({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: LessonsProps) {
  return (
    <button
      onClick={onPlay}
      disabled={isCurrent}
      data-active={isCurrent}
      className="flex items-center gap-3 text-sm text-zin data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
    >
      {isCurrent && <PlayCircle className="w-4 h-4 text-emerald-400" />}
      {!isCurrent && <Video className="w-4 h-4 text-zinc-500" />}

      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}

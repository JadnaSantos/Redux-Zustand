import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        controls
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=JRQaxj_Yw00"
      />
    </div>
  );
}

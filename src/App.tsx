import { useState } from "react";
import VideoList from "./components/VideoList";

import video from "./data/data";

export default function App() {
  const [list] = useState(video);

  return <VideoList list={list} />;
}

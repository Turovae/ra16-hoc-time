import Video from "./Video";

function VideoList(props: {
  list: {
    id: number;
    url: string;
    date: string;
  }[];
}) {
  return props.list.map((item) => (
    <Video key={item.id} url={item.url} date={item.date} />
  ));
}

export default VideoList;

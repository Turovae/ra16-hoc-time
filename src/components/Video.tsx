import DateTime from "./DateTime";
import DateTimePretty from "./DateTimePretty";
import { getTimePassed } from "../utils/timeFormatters";

const PrettyTimeComp = DateTimePretty(DateTime, getTimePassed);

function Video(props: { url: string; date: string }) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <PrettyTimeComp date={props.date} />
    </div>
  );
}

export default Video;

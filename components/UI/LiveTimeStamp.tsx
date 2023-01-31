"use client";
import TimeAgo from "react-timeago";

const LiveTimeStamp = ({ time }: { time: string }) => <TimeAgo date={time} />;

export default LiveTimeStamp;

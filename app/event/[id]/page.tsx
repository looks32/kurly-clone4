import { Metadata } from "next";

export const metadata = {
  title: "Event",
};

export default function Event({params:{id}}) {
  return <div>Event{id}</div>;
}

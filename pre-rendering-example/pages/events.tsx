import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { Event } from "../types/event";
import { useRouter } from "next/router";

const EventsPage = ({
  events,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [sportEvents, setSportEvents] = useState<Event[] | null>(events);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data: Event[] = await response.json();

    setSportEvents(data);

    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <div>
      <h1>Events Page</h1>
      <button onClick={fetchSportsEvents}>Sports Event</button>
      {sportEvents?.map((ev) => {
        return (
          <div key={ev.id}>
            <h2>
              {ev.id} - {ev.title} {ev.date} {ev.date} | {ev.category}
            </h2>
            <p>{ev.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data: Event[] = await response.json();

  return {
    props: {
      events: data,
    },
  };
};

export default EventsPage;

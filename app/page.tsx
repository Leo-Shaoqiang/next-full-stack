import React from "react";
import prisma from "../lib/prisma";
import { makeSerializable } from "../lib/util";
import { Video, User } from "@prisma/client";

type Props = {
  data: (Video & {
    author: User;
  })[];
};

export default async function Page() {
  const data = await getData()
 
  console.log(data);
  return (
    <div className="max-w-5xl px-3 mx-auto">
      <h1>首页</h1>
    </div>
  );
}

async function getData()  {
  const data = await prisma.video.findMany({
    include: { author: true },
  });

  return {
    props: { data: makeSerializable(data) },
  };
 };
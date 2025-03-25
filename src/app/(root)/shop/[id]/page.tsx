import React from "react";

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  console.log(id);

  return <div>{id}</div>;
};

export default page;

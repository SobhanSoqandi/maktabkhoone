import React from "react";

export default async function page({ params }) {
  const { slug, id } = await params;
  return <div>{id}</div>;
}

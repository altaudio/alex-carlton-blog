import React from "react";
import { useRouter } from "next/router";
import { PageHeader } from "composed/PageHeader/PageHeader";

const Post = () => {
  const router = useRouter();
  return (
    <>
      <PageHeader />
      {router.query.id}
    </>
  );
};

export default Post;

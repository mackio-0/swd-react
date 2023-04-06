import {Loader} from "@mantine/core";

import React from "react";

const Loading = () => {
  return (
    <div className=" flex h-screen justify-center items-center">
      <Loader color="violet" size="lg" variant="bars" />
    </div>
  );
};

export default Loading;

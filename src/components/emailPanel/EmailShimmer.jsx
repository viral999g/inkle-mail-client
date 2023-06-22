import { CListGroup, CListGroupItem } from "@coreui/react";
import React from "react";
import { Shimmer } from "react-shimmer";

const EmailShimmer = () => {
  return Array(8)
    .fill("")
    .map((_, index) => <Shimmer key={index} height={200} width={"100%"} />);
};

export default EmailShimmer;

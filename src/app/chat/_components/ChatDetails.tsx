"use client";
import React from "react";
import { useQuery } from "react-query";
import { getChatDetails } from "../../../../services";
import { IChatDetails } from "../../../../services/type";
import { formatBytes } from "../../../../lib/utils";

const ChatDetails = () => {
  const { isLoading, data } = useQuery<{
    data: { data: IChatDetails };
  }>({
    queryFn: getChatDetails,
    queryKey: ["chat"]
  });

  const chatDetails = [
    { title: "No of Users", value: data?.data?.data?.numberOfUsers },
    {
      title: "Total Message Sent ",
      value: data?.data?.data?.totalMessagesSent
    },
    {
      title: "Total Media Storage Used",
      value: formatBytes(data?.data?.data?.totalStorageUsed || 0)
    },
    { title: "Total Media Sent", value: data?.data?.data?.totalMediaSent }
  ];
  return (
    <div className="grid grid-cols-4 gap-3 mt-2">
      {chatDetails?.map(d => (
        <div
          key={d?.title}
          className="rounded border-[#E7E9FF] border pb-6 pt-4 px-6 bg-white flex-col flex text-[#566BA0]"
        >
          <p className="uppercase text-xs ">{d?.title}</p>

          <div className="mt-auto pt-3 text-[28px]">
            {isLoading ? "---" : d?.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatDetails;

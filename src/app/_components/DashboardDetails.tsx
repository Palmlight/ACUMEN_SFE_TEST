"use client";

import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { getDashboardDetails } from "../../../services";
import moment from "moment";
import { IDashboardTypes } from "../../../services/type";
import { formatBytes } from "../../../lib/utils";

const DashboardDetails = () => {
  const {
    isFetching: isLoading,
    refetch,
    data,
    dataUpdatedAt
  } = useQuery<{
    data: { data: IDashboardTypes };
  }>({
    queryFn: getDashboardDetails,
    queryKey: ["dashboard"]
  });

  const dashDetails = [
    { title: "Users Online", value: data?.data?.data?.usersOnline },
    { title: "Users Active Today", value: data?.data?.data?.usersActiveToday },
    {
      title: "Users Active This Month",
      value: data?.data?.data?.usersActiveThisMonth
    },
    {
      title: "Peak Concurrency This Month",
      value: data?.data?.data?.peakConcurrency
    },
    {
      title: "Dashboard",
      value: (
        <p>
          {formatBytes(data?.data?.data?.dashboard || 0)}{" "}
          <span className="text-sm">of 512GB</span>
        </p>
      )
    }
  ];

  return (
    <div>
      <div className="flex items-center gap-4">
        <p className="text-[#51545C]">
          Last Updated{" "}
          {dataUpdatedAt
            ? moment(dataUpdatedAt).startOf("hour").fromNow()
            : "--"}
        </p>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => refetch()}
        >
          <Image
            src="/fi_refresh-ccw.svg"
            alt="refresh"
            className=""
            height={16}
            width={16}
          />
          <p className="text-robinGreen text-sm">Refresh</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mt-2">
        {dashDetails?.map(d => (
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
    </div>
  );
};

export default DashboardDetails;

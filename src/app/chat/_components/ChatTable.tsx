"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getMessages } from "../../../../services";
import { IMessage, IMeta } from "../../../../services/type";
import ChatListing from "./ChatListing";
import Pagination from "./Pagination";
import FilterModal from "./FilterModal";

const ChatTable = () => {
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const { data } = useQuery<{
    data: { data: IMessage[] } & IMeta;
  }>({
    queryFn: () => getMessages(page),
    queryKey: ["messages", page]
  });

  const items = data?.data?.data || [];
  const meta = data?.data;

  return (
    <div className="mt-[60px]">
      <div className="flex items-center pb-3 justify-between border-[#535F8910] border-b">
        <div className="flex items-center gap-[60px]">
          <p className="font-medium text-robinOrange after:border-b-2 after:border-b-robinOrange after:w-full relative after:absolute after:left-0 after:-bottom-[25px]">
            Direct Messages
          </p>
          <p className="text-[#5A483C]">Groups</p>
        </div>

        <div
          className="rounded-lg border border-[#C1CEC8] pl-5 pr-4 py-3 w-[264px] flex items-center justify-between"
          onClick={() => setShowFilter(true)}
        >
          <p className="text-sm text-[#8D9091]">Search...</p>
          <Image src="/mask.svg" height={19} width={19} alt="search" />
        </div>
      </div>

      {showFilter && <FilterModal close={() => setShowFilter(false)} />}
      <div className="border border-[#E7E9FF] mt-5 mb-10 bg-white pb-[34px] pt-[24px]">
        <div className="grid gap-5 grid-cols-[1fr_160px_180px_120px_110px_40px] px-[55px] text-sm text-[#9999BC] uppercase pb-3 border-b border-b-[#00000010]">
          <p className="">USERS</p>
          <div className="flex items-center gap-1">
            <p>Messages Sent </p>
            <Image src="/Sort.svg" width={8} height={14} alt="sort" />
          </div>
          <div className="flex items-center gap-1">
            <p>Media storage Used</p>
            <Image src="/Sort.svg" width={8} height={14} alt="sort" />
          </div>
          <div className="flex items-center gap-1">
            <p>Date Created</p>
            <Image src="/Sort.svg" width={8} height={14} alt="sort" />
          </div>
          <div className="flex items-center gap-1">
            <p>Media Sent</p>
            <Image src="/Sort.svg" width={8} height={14} alt="sort" />
          </div>
        </div>

        {items?.map(it => (
          <ChatListing {...it} key={it?.full_name} />
        ))}
        <Pagination
          totalPages={meta?.totalPages || 1}
          onChange={p => setPage(p)}
          page={page}
        />
      </div>
    </div>
  );
};

export default ChatTable;

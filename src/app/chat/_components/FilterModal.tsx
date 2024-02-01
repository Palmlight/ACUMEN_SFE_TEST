"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../../lib/utils";

const FilterModal = ({ close }: { close: () => void }) => {
  const dateList = ["Today", "Last 7 days", "This month", "Last 3 months"];
  const [date, setDate] = useState(dateList[0]);

  const mesageOptions = [
    "0 - 500 Messages",
    "500 - 2000 messages",
    "2000+ Messages"
  ];

  const mediaOptions = ["0 - 50 MB", "50 MB - 200MB", "200MB - 1GB", "1GB+"];

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-screen w-full bg-[#07143930] z-50">
      <motion.div
        className="w-[588px] h-full flex-col flex bg-white ml-auto px-10"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        exit={{ opacity: 0, x: 200 }}
      >
        <div className="flex items-center justify-between pt-7">
          <h1 className="text-black text-xl">Filter Table</h1>
          <Image
            src="/clear_24px.svg"
            alt="clear"
            height={24}
            width={24}
            className="cursor-pointer"
            onClick={() => close?.()}
          />
        </div>

        <div className="mt-8 flex items-center gap-3">
          {dateList?.map(d => (
            <div
              key={d}
              className={cn(
                "py-2.5 px-4 text-sm border-[#EFF1F6] border rounded-[100px]",
                {
                  "border-robinOrange bg-[#FFF1E9] text-robinOrange": d === date
                }
              )}
              onClick={() => setDate(d)}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="mt-7">
          <h1 className="font-medium text-[#51545C] mb-2">Messages</h1>
          <select className="w-full px-5 py-[18px] bg-[#F5F7FC] rounded border border-[#9999BC]">
            {mesageOptions?.map(m => (
              <option value={m} key={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-7">
          <h1 className="font-medium text-[#51545C] mb-2">
            Media Storage Used
          </h1>
          <select className="w-full px-5 py-[18px] bg-[#F5F7FC] rounded border border-[#9999BC]">
            {mediaOptions?.map(m => (
              <option value={m} key={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-auto pb-[100px]">
          <div className="mx-auto w-[380px] bg-robinBlue py-2.5 text-center font-medium rounded-[30px] text-white">
            Filter Table
          </div>

          <p className="text-center text-[#8D9091] mt-8">Clear Filter</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FilterModal;

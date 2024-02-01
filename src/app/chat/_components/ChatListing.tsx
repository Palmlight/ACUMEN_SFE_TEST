"use client";

import React, { useState, useRef } from "react";
import { IMessage } from "../../../../services/type";
import { formatBytes } from "../../../../lib/utils";
import moment from "moment";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";

const ChatListing = ({
  full_name,
  media_sent,
  media_storage_used,
  date_created,
  message_sent
}: IMessage) => {
  const [showDetails, setShowDetails] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setShowDetails(false));
  return (
    <div
      ref={ref}
      key={full_name}
      className="grid gap-5 grid-cols-[1fr_160px_180px_120px_110px_40px] px-[55px] text-sm text-[#071439] pt-5 pb-3 border-b border-b-[#00000010]"
    >
      <p className="capitalize">{full_name}</p>
      <p>{message_sent}</p>
      <p>{formatBytes(media_storage_used || 0)}</p>
      <p>{moment(date_created)?.format("DD MMM, YYYY")}</p>
      <p>{media_sent}</p>
      <div
        className="w-full flex items-center justify-right relative"
        onClick={() => setShowDetails(!showDetails)}
      >
        <Image
          height={16}
          width={16}
          src="/u_ellipsis-v.svg"
          alt="ellipsis"
          className="cursor-pointer"
        />
        <AnimatePresence>
          {showDetails && (
            <motion.div
              className="absolute z-10 right-0 top-4 w-[200px] py-3 border border-[#F5F7FC] bg-white rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between px-4 pb-3 border-b border-[#00000010] text-sm">
                <p>View</p>
                <Image
                  height={16}
                  width={16}
                  src="/u_eye.svg"
                  alt="ellipsis"
                  className="cursor-pointer"
                />
              </div>
              <div className="items-center justify-between flex px-4 text-sm pt-3">
                <p className="text-[#D53120]">Disable</p>
                <Image
                  height={16}
                  width={16}
                  src="/fi_x-circle.svg"
                  alt="ellipsis"
                  className="cursor-pointer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ChatListing;

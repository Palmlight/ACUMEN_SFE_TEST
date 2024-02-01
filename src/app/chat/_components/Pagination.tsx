"use client";
import React from "react";
import { IMeta } from "../../../../services/type";
import { cn } from "../../../../lib/utils";

const Pagination = ({
  totalPages: lastPage,
  page,
  onChange
}: Partial<IMeta> & { onChange: (p: number) => void }) => {
  if (!lastPage || lastPage === 1) {
    return null;
  }
  const PageArray = Array.from(Array(Number(lastPage)), (_, x) => x + 1);
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      {PageArray?.map(p => (
        <div
          className={cn(
            "rounded border border-[#DFE3E8] h-8 w-8 flex items-center justify-center text-sm cursor-pointer",
            {
              "border-[#0546E0] text-[#0546E0]": p === page
            }
          )}
          onClick={() => onChange(p)}
          key={p}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default Pagination;

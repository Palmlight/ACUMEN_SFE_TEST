"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../../lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const sidebarItems = [
    { link: "#", title: "Get Started", icon: "/u_circuit.svg" },
    { link: "/", title: "Analytics", icon: "/u_analytics.svg" },
    { link: "/chat", title: "Chat", icon: "/u_comment-alt-dots.svg" },
    { link: "#", title: "Moderation", icon: "/u_silence.svg" },
    { link: "#", title: "API & Auth Keys", icon: "/light-bulb.svg" },
    { link: "#", title: "Announcement", icon: "/fi_bell.svg" },
    { link: "#", title: "Settings", icon: "/u_setting.svg" }
  ];
  const pathname = usePathname();

  return (
    <div className="w-full h-full bg-white py-10">
      <div className="pl-[50px] pr-4">
        <div className="flex items-center justify-between w-full">
          <Image src="/frame.svg" alt="Logo" width={113} height={33} priority />
          <div className="h-[42px] w-[42px] flex items-center justify-center bg-toneBlue rounded-full">
            <Image
              src="/double-arrow.svg"
              alt="Arrows"
              width={24}
              height={24}
            />
          </div>
        </div>
        <h2 className="text-xs mt-3 text-dark-03 mb-10">App Name</h2>
        <div className="space-y-8">
          {sidebarItems?.map(side => (
            <Link
              href={side?.link}
              className={cn("flex items-center gap-4 text-subtleBlue", {
                "text-robinOrange": pathname === side?.link
              })}
              key={side?.title}
            >
              <Image
                src={side?.icon}
                alt={side?.title}
                height={16}
                width={16}
                className="w-4 h-4"
              />
              <p className="text-sm">{side?.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-[30px] w-full mt-[51px]">
        <div className="border-b border-[#D3D7EA]" />
      </div>
      <div className="pl-[50px] mt-6">
        <Link
          href="#"
          className={cn("flex items-center gap-4 text-subtleBlue")}
        >
          <Image
            src="/u_left-arrow-to-left.svg"
            alt="Left arrow"
            height={16}
            width={16}
            className="w-4 h-4"
          />
          <p className="text-sm">Collapse</p>
        </Link>

        <div className="flex items-center gap-4 mt-20">
          <Image
            src="/u_comment-alt-exclamation.svg"
            alt="Left arrow"
            height={16}
            width={16}
            className="w-4 h-4"
          />
          <p className="text-sm text-robinRed">Give Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

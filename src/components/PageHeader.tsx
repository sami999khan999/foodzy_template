"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const PageHeader = () => {
  const path = usePathname();

  const pageTitle = useMemo(() => {
    const segments = path.split("/").filter(Boolean);

    switch (segments[0]) {
      case "shop":
        return segments.length > 1 ? "porduct" : "shop";
      case "blog":
        return segments.length > 1 ? "blog details" : "blog";
      default:
        return segments[0] ? segments[0] : "Home";
    }
  }, [path]);

  return (
    <div className="bg-primary ">
      <div className="wrapper text-foreground py-5 flex justify-between items-center  ">
        <div className="lg:text-xl text-base capitalize cursor-pointer">
          {pageTitle}
        </div>
        <div className="flex gap-2 capitalize lg:text-base text-sm">
          <Link href={"/"}>Home</Link>
          <p>•</p>
          <p className="cursor-pointer">{pageTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

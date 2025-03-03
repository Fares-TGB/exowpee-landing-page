"use client";

import { Check } from "lucide-react";

const Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center  gap-2">
      <span className=" bg-black  flex items-center justify-center rounded-full size-4">
        <Check className="text-white size-2  " />
      </span>
      <p className="text-card-foreground-secondary">{children}</p>
    </div>
  );
};

export default Item;

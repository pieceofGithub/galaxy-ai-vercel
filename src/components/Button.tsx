import { PropsWithChildren } from "react";

export const Button = (props: PropsWithChildren) => {
  return (
    <button className="shadow-[0px_0px_12px_#8c45ff]  relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a]">
      <div className="absolute inset-0">
        <div className="rounded-lg border-white/20 border absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

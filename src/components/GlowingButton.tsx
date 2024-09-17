import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: "py-1 px-2 text-xs",
  medium: "py-2 px-4 text-sm",
  large: "py-3 px-6 text-lg",
};

export const GlowingButton = ({ size = "medium", children }: ButtonProps) => {
  return (
    <button
      className={`relative rounded-lg font-semibold text-white ${sizes[size]} bg-gradient-to-r from-[#6a00f4] to-[#c400ff] overflow-hidden`}
    >
      {/* Parlayan Gölgeler */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-0 blur-md opacity-70 animate-pulse bg-gradient-to-r from-[#ff8a00] via-[#e52e71] to-[#6a00f4]"></div>
        <div className="absolute inset-0 blur-[10px] opacity-50 animate-pulse bg-gradient-to-r from-[#ff8a00] via-[#e52e71] to-[#6a00f4]"></div>
        <div className="absolute inset-0 blur-[15px] opacity-40 animate-pulse bg-gradient-to-r from-[#ff8a00] via-[#e52e71] to-[#6a00f4]"></div>
      </div>

      {/* İçerik */}
      <span className="relative z-10">{children}</span>

      {/* İç Işıldama */}
      <div className="absolute inset-0 rounded-lg z-0 opacity-50 bg-gradient-to-r from-[#ff00ff] to-[#0000ff] mix-blend-overlay"></div>
    </button>
  );
};

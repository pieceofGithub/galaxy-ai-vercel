import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstagramSocial from "@/assets/social-instagram.svg";
import YTubeSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center ">
          <div className="flex gap-2 items-center lg:flex-1">
            <Logo className="w-6 h-6 " />
            <div className="font-medium">AI startup landing page</div>
          </div>

          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center">
            <a
              href=""
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href=""
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              ChangeLog
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/70 hover:text-white transition" />
            <InstagramSocial className="text-white/70 hover:text-white transition" />
            <YTubeSocial className="text-white/70 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

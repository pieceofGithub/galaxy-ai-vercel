import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import { GlowingButton } from "@/components/GlowingButton";
export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky z-10 top-0 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center border md:border md:p-2.5 border-white/15 rounded-xl max-w-2xl mx-auto md:backdrop-blur relative">
          <div className="absolute inset-0 backdrop-blur -z-10 md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Feature
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join waitlist</Button>
            <MenuIcon className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

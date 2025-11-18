import { NavbarLinks } from "@/components/app/navbar-links";
import { NavbarSocialLinks } from "@/components/app/navbar-social-links";
import Search from "@/components/app/search";
import { ThemeSwitcher } from "@/components/app/theme-switcher";

async function Navbar() {
  const starsCount = 420;

  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-4">
          <Search />

          <div className="flex items-center justify-end gap-4">
            <NavbarSocialLinks starsCount={starsCount} />

            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar;

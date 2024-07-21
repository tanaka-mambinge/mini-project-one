import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { CaretDown, List, UserCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Props = {};

const menuItems = [
  { title: "For Sale", href: "", icon: CaretDown },
  { title: "To Rent", href: "", icon: CaretDown },
  { title: "New Developments", href: "", icon: null },
  { title: "Showdays", href: "", icon: null },
  { title: "Agencies", href: "", icon: null },
  { title: "Blog", href: "", icon: null },
];

const MobileMenuDropDown = () => {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-full border border-red-600 text-red-600 p-2">
        <List size="24px" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl bg-gray-600 text-white p-2"
      >
        {menuItems.map((item) => (
          <MenuItem key={item.title}>
            <button className="w-full text-left p-2">{item.title}</button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

const AccountDropDown = () => {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-full border border-red-600 text-red-600 p-2">
        Account
        <UserCircle size="24px" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl bg-gray-600 text-white p-2"
      >
        <MenuItem>
          <button className="w-full text-left p-2">Signup</button>
        </MenuItem>
        <MenuItem>
          <button className="w-full text-left p-2">Login</button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

function Navbar({}: Props) {
  return (
    <>
      <div className="flex justify-between absolute w-full p-4 bg-white shadow-md h-20 items-center">
        <div className="flex items-center gap-4">
          <div className="flex lg:hidden">
            <MobileMenuDropDown />
          </div>
          <h1>Logo</h1>
        </div>

        <div className="hidden space-x-4 lg:flex">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="text-zinc-800 flex gap-2 items-center"
            >
              {item.title}
              {item.icon && <item.icon size="16px" />}
            </Link>
          ))}
        </div>

        <div>
          <AccountDropDown />
        </div>
      </div>

      {/* spacer */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;

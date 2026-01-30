import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 lg:ml-64 w-full lg:w-[calc(100%-16rem)] bg-white shadow-sm z-10">
      <div className="flex h-16 justify-end items-center px-10">
        <div className="cursor-pointer text-[#393F9D]">
          <Bell />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

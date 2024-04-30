import SideBar from "./SideBar";
const Aside = () => {

  return (
    <aside className="h-screen box-border lg:w-12 md:w-14 bg-white sm:w-12 xs:w-14 xxs:w-12 border-r border-t py-2 grow overflow-hidden dark:bg-slate-800 dark:border-e border-gray-300">
      <h6 className="text-center text-gray-900 dark:text-gray-100 text-xs">Menu</h6>
      <SideBar />
    </aside>
  );
};

export default Aside;

import { createContext, useState } from "react";

export const SidebarContext = createContext({
  sidebarToogle: true,
  toogleSidebar: () => {},
  closeSidebar: () => {}
});

const SidebarProvider = ({
  children
}) => {
  const [sidebarToogle, setSidebarToogle] = useState(true);

  const toogleSidebar = () => setSidebarToogle(!sidebarToogle);

  const closeSidebar = () => setSidebarToogle(false);

  return (
    <SidebarContext.Provider
      value={{ sidebarToogle, toogleSidebar, closeSidebar}}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider;

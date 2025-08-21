import { useEffect, useCallback } from "react";

export default function useSidebarToggle() {
  const setSidebarType = useCallback(() => {
    const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    const mainWrapper = document.getElementById("main-wrapper");

    if (!mainWrapper) return;

    if (width < 1199) {
      mainWrapper.setAttribute("data-sidebartype", "mini-sidebar");
      mainWrapper.classList.add("mini-sidebar");
    } else {
      mainWrapper.setAttribute("data-sidebartype", "full");
      mainWrapper.classList.remove("mini-sidebar");
    }
  }, []);

  useEffect(() => {
    // Initial check
    setSidebarType();

    // On resize
    window.addEventListener("resize", setSidebarType);
    return () => window.removeEventListener("resize", setSidebarType);
  }, [setSidebarType]);

  const handleToggle = () => {
    const mainWrapper = document.getElementById("main-wrapper");
    if (!mainWrapper) return;

    mainWrapper.classList.toggle("mini-sidebar");
    mainWrapper.classList.toggle("show-sidebar");

    if (mainWrapper.classList.contains("mini-sidebar")) {
      mainWrapper.setAttribute("data-sidebartype", "mini-sidebar");
    } else {
      mainWrapper.setAttribute("data-sidebartype", "full");
    }
  };

  return { handleToggle };
}

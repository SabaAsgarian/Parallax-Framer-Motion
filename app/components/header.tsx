"use client";

import { Button } from "@mui/material";
import { useState } from "react";





const Page: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>


      <header
        className=" overflow-hidden fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-xl bg-linear-to-r from-[#00E5FF] to-[#915EFF]" />
            <a
              href="https://github.com/SabaAsgarian/Parallax-Framer-Motion"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="cursor-pointer text-sm font-semibold tracking-wide text-slate-100 md:text-base">
                Parallax Demo
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex md:text-sm">
              <button
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() =>
                  document.getElementById("process")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white cursor-pointer"
              >
                Process
              </button>

              <button
                onClick={() =>
                  document.getElementById("pricing")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white cursor-pointer"
              >
                Pricing
              </button>
              <a
                href="https://github.com/SabaAsgarian/Parallax-Framer-Motion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  className="rounded-full border-slate-600 px-4 py-1 normal-case"
                >
                  Get Started
                </Button>
              </a>
            </nav>
            <button
              type="button"
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-100 shadow-sm md:hidden"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform duration-200 ${mobileOpen ? "translate-y-1 opacity-0" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-opacity duration-200 ${mobileOpen ? "rotate-45 translate-y-1" : "opacity-100"
                    }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-slate-100 transition-transform duration-200 ${mobileOpen ? "-translate-y-1 -rotate-45" : ""
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-800/60 bg-[#020617]/95 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-200">
              <button
                onClick={() =>
                  document.getElementById("features")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white"
              >
                Features
              </button>
              <button
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white"
              >
                Services
              </button>

              <button
                onClick={() =>
                  document.getElementById("process")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white"
              >
                Process
              </button>

              <button
                onClick={() =>
                  document.getElementById("pricing")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
                className="hover:text-white"
              >
                Pricing
              </button>
               <a
                href="https://github.com/SabaAsgarian/Parallax-Framer-Motion"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button
                variant="contained"
                color="primary"
                size="small"
                className="mt-2 w-full rounded-full normal-case"
              >
                Get Started
              </Button>
              </a>
            </div>
          </div>
        )}
      </header>


    </>
  );
}
export default Page;
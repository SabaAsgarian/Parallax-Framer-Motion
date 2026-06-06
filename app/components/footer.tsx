"use client";

import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import Me from "../../public/me.png";

const Page: React.FC = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#00010a] px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.2),transparent_60%),radial-gradient(circle_at_bottom,rgba(145,94,255,0.2),transparent_60%)]" />
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              READY TO BUILD
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
              You just scrolled through a{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                complete
              </span>{" "}
              parallax layout.
            </h2>

            {/* FIXED: ensure the paragraph block is centered and its text is centered */}
            <p className="mt-4 max-w-2xl text-sm text-slate-300 md:text-base text-center mx-auto">
              Use this as a starting point: remove the sections you don't need,
              swap the copy and colors, and wire up real navigation and data.
              You now have a blueprint for long, premium-feeling pages.
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
             <a
                href="https://github.com/SabaAsgarian/Parallax-Framer-Motion"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="rounded-full px-8 py-2 font-semibold normal-case"
            >
              Duplicate this layout
            </Button>
              </a>
             <a
                href="https://github.com/SabaAsgarian/Parallax-Framer-Motion"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="rounded-full border-slate-500 px-8 py-2 font-semibold normal-case"
            >
              Explore the code
            </Button>
           </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#020617] py-6">
        <div className="mx-auto max-w-6xl px-6 text-xs text-slate-500 flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
          {/* Left Text */}
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <span>© {new Date().getFullYear()} Parallax Demo by Saba Asgarian.</span>
            <span>Built with Next.js, Tailwind CSS, MUI & Framer Motion.</span>
          </div>

          {/* Profile + Icons (pure Tailwind layout - same background) */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
            {/* avatar with gradient ring */}
            <div
              className="rounded-full p-0.5 bg-linear-to-r from-[#00E5FF] to-[#915EFF]"
              aria-hidden
            >
              {/* inner circle matches footer background so it looks seamless */}
              <div
                className="rounded-full overflow-hidden"
                style={{ backgroundColor: "#020617" }}
              >
                <Image
                  src={Me}
                  alt="Saba Asgarian"
                  width={80}
                  height={80}
                  className="block rounded-full"
                  priority
                />
              </div>
            </div>

            {/* icons */}
            <div className="flex items-center gap-3">
              <Link href="https://www.instagram.com/saba_asgarian_" aria-label="Instagram">
                <InstagramIcon className="text-slate-500 hover:text-white transition" />
              </Link>

              <Link href="https://www.linkedin.com/in/saba-asgarian-69161088" aria-label="LinkedIn">
                <LinkedInIcon className="text-slate-500 hover:text-white transition" />
              </Link>

              <Link href="https://github.com/SabaAsgarian" aria-label="GitHub">
                <GitHubIcon className="text-slate-500 hover:text-white transition" />
              </Link>

              <Link href="mailto:sabaasgarian591@gmail.com" aria-label="Email">
                <MailIcon className="text-slate-500 hover:text-white transition" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;

"use client";



import Image from "next/image";
import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";
import a from '../../public/1.jpg'
import b from '../../public/2.jpg'
import c from '../../public/3.jpg'


const Page: React.FC = () => {
    const casesOffset = useParallax(0.2);
  return (
    <div>
         <section className="relative bg-[#050816] px-6 py-20 md:px-10 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(15,23,42,1),transparent_60%)] opacity-90"
          style={{
            transform: `translateY(${casesOffset * -0.25}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                CASE STUDIES
              </p>
              <h2 className="mt-3 mb-20 text-2xl font-semibold md:text-3xl lg:text-4xl">
                Examples of{" "}
                <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                  scrolling stories
                </span>
                .
              </h2>
            </div>
            
          </motion.div>

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
            {[
              {
                name: "SaaS Analytics",
                role: "Landing + App Shell",
                summary:
                  "A multi-section scroll describing the product, metrics, and onboarding flow.",
              },
              {
                name: "Creative Studio",
                role: "Portfolio",
                summary:
                  "Image-heavy layout with parallax galleries and storytelling for each project.",
              },
              {
                name: "Developer Tools",
                role: "Docs + Marketing",
                summary:
                  "Sticky sidebar docs with a marketing front-page that uses the same design system.",
              },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-[#020617] shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
                  style={{
                    transform: `translateY(${casesOffset * (0.09 * (index - 1))}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <div className="relative h-40 overflow-hidden">
                    {/* Top image for each case study card.
                        We use a, b, c that you imported at the top of the file. */}
                    <Image
                      src={index === 0 ? a : index === 1 ? b : c}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.25),transparent_60%),radial-gradient(circle_at_bottom,rgba(145,94,255,0.25),transparent_60%) opacity-70" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                        {project.role}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-slate-50">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {project.summary}
                      </p>
                    </div>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      VIEW CASE STUDY →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
     
        

       
     
    </div>
  );
}
export default Page;
"use client";



import useParallax from "../hooks/useParallax";
import { motion} from "framer-motion";
const Page: React.FC = () => {
     const servicesOffset = useParallax(0.18);
  return (
    <div id="Servicess" >
       {/* Services Section */}
      <section className="relative bg-[#050816] px-6 py-20 md:px-10 md:py-24 min-h-screen max-h-auto">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-[#0f172a] to-transparent opacity-80"
          style={{
            transform: `translateY(${servicesOffset * -0.4}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              WHAT WE BUILD
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Full-stack experiences, from{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                idea to launch
              </span>
              .
            </h2>
            <p className="mt-4  max-w-xl text-sm text-slate-300 md:text-base h-auto">
              Mix parallax storytelling with fast, accessible implementation.
              These are typical sections you would see on a real landing page.
            </p>
          </motion.div>

          <div className="mt-24 mb-24 grid gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                label: "Landing Pages",
                body: "High-conversion marketing pages with layered motion, scroll cues, and clear CTAs.",
              },
              {
                label: "Product Sites",
                body: "Explain complex products with animated diagrams, timelines, and case studies.",
              },
              {
                label: "Dashboards",
                body: "Application shells that reuse the same design system as your marketing site.",
              },
              {
                label: "Docs & Guides",
                body: "Beautiful documentation layouts with sticky navigation and smooth anchors.",
              },
              {
                label: "Portfolios",
                body: "Showcase work with rich visuals, parallax galleries, and subtle microinteractions.",
              },
              {
                label: "Custom Concepts",
                body: "Any bespoke layout where storytelling and motion matter more than plain UI.",
              },
            ].map((service, idx) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.12 }}
              >
                <div
                  className="flex h-full flex-col rounded-2xl border border-slate-800 bg-[#020617]/80 p-6 backdrop-blur-md"
                  style={{
                    transform: `translateY(${servicesOffset * (0.07 * (idx - 2))}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    0{idx + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-50">
                    {service.label}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{service.body}</p>
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
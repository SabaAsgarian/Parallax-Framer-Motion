"use client";
import { Box, Button } from "@mui/material";
import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";






const Page: React.FC = () => {
    const pricingOffset = useParallax(0.14);
  return (
    <div>
     <section className="relative bg-[#050816] px-6 py-20 md:px-10 md:py-24" id="pricing">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-linear-to-b from-[#0f172a] to-transparent"
          style={{
            transform: `translateY(${pricingOffset * -0.25}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              PRICING
            </p>
            <h2 className="mt-3 mb-20 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Simple tiers for{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                complex
              </span>{" "}
              pages.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
            {[
              {
                label: "Starter",
                price: "$",
                desc: "Single-page concept with basic parallax hero and feature section.",
                items: ["1 hero layout", "1 feature strip", "Responsive basics"],
                highlighted: false,
              },
              {
                label: "Growth",
                price: "$$",
                desc: "Multi-section scroll, like this demo, with animations and polish.",
                items: [
                  "Hero + 6–8 sections",
                  "Parallax layers & motion",
                  "Optimized for conversions",
                ],
                highlighted: true,
              },
              {
                label: "Custom",
                price: "∞",
                desc: "Fully tailored experience for product launches or campaigns.",
                items: [
                  "Custom layouts & art direction",
                  "Advanced animations",
                  "Integration with your stack",
                ],
                highlighted: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div
                  className={`flex h-full flex-col rounded-3xl border p-6 ${
                    plan.highlighted
                      ? "border-[#00E5FF] bg-[#020617] shadow-[0_24px_80px_rgba(0,229,255,0.3)]"
                      : "border-slate-800 bg-[#020617]/95"
                  }`}
                  style={{
                    transform: `translateY(${pricingOffset * (0.08 * (index - 1))}px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                    {plan.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-slate-50">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{plan.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {plan.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Box sx={{marginTop:"15%",marginBottom:"5%"}}>
                  <Button
                    variant={plan.highlighted ? "contained" : "outlined"}
                    color="primary"
                    size="small"
                    className="mt-6 w-full rounded-full normal-case"
                  >
                    Choose {plan.label}
                  </Button>
                  </Box>
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
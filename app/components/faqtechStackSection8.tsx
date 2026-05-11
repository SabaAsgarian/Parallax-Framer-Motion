"use client";
import useParallax from "../hooks/useParallax";
import { motion } from "framer-motion";







const Page: React.FC = () => {
      const faqOffset = useParallax(0.08);
  return (
    <section className="relative bg-[#020617] px-6 py-20 md:px-10 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.95),transparent_65%)]"
        style={{transform:`translateY(${faqOffset * -0.2}px)`,

                transition:"transform 0.1s linear",
        }}  
        />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:gap-16 ">
            <motion.div className="md:w-1/2"
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true,amount:0.4}}
            transition={{duration:0.7}}
            >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl">
              Common questions about{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                parallax sites
              </span>
              .
            </h2>
            <div className="mt-6 space-y-5 text-sm text-slate-300 md:text-base">
              <div>
                <p className="font-medium text-slate-100">
                  Will this hurt performance?
                </p>
                <p className="mt-1">
                  When done with lightweight transforms and modest effects
                  (like we use here), parallax can stay smooth and fast. Avoid
                  huge image files and heavy scroll listeners.
                </p>
              </div>
              <div>
                <p className="font-medium text-slate-100">
                  Is this mobile friendly?
                </p>
                <p className="mt-1">
                  Yes—each section is responsive. On small screens, keep motion
                  subtle and prioritize legibility over fancy effects.
                </p>
              </div>
              <div>
                <p className="font-medium text-slate-100">
                  Can I reuse these patterns?
                </p>
                <p className="mt-1">
                  Absolutely. Swap the text and tweak the gradients, and you
                  have templates for SaaS, portfolios, product launches, and
                  more.
                </p>
              </div>
            </div>

            </motion.div>
            <motion.div className="md:w-1/2"
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true,amount:0.4}}
            transition={{duration:0.7}}
            >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              STACK
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-50">
              Tools used in this demo
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
              {[
                "Next.js App Router",
                "TypeScript",
                "Tailwind CSS",
                "Material UI",
                "Framer Motion",
                "Custom parallax hook",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#020617]/90 px-3 py-2"
                  style={{
                    transform: `translateY(${faqOffset * 0.08}px)`,
                    transition: "transform 0.15s ease-out",
                    
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            </motion.div>


        </div>

    
     
        

       
     
    </section>
  );
}
export default Page;
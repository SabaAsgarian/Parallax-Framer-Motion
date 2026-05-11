"use client";



import useParallax from "../hooks/useParallax";
import { motion} from "framer-motion";




const Page: React.FC = () => {
    const processOffset = useParallax(0.12);
  return (
    //  Process Timeline Section 
    < >
    <section className="relative overflow-hidden bg-[#020617]
    px-6 py-20 md:px-10 md:py-24">
        <div 
        className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(circle_at_center,rgba(15,23,42,1)_0,#020617_55%,#000_100%)]"
        style={{transform:`translateY(${processOffset * -0.3}px)`,
            transition:"transform 0.1s linear "
        }}/>
        <div className="mx-auto max-w-5xl">
            <motion.div className="text-center"
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true,amount:0.4}}
            transition={{duration:0.7}}
            >
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    PROCESS
                </p>
                <h2 className="mt-3 text-2xl font-semibold md:text-3xl lg:text-4xl
                ">
                    A scroll from{" "}
                    <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                        concept

                    </span>{" "}
                    to{" "}
                    <span className="bg-linear-to-r from-[#915EFF] to-[#00E5FF] bg-clip-text text-transparent">
                        launch
                    </span>
                    .

                </h2>

            </motion.div>
            <div className="mt-12 space-y-10 border-l border-slate-800/70 pl-6 md:mt-16 md:space-y-14 md:pl-8">
            {[
              {
                title: "Discovery",
                subtitle: "Define the narrative",
                copy: "Clarify what your page should say and what action you want the visitor to take.",
              },
              {
                title: "Wireframes",
                subtitle: "Shape the scroll",
                copy: "Plan every screenful—hero, services, social proof, pricing, and CTA—we're doing that here.",
              },
              {
                title: "Visual Design",
                subtitle: "Layer the motion",
                copy: "Add gradients, parallax, and micro-animations to match your brand and keep users engaged.",
              },
              {
                title: "Build & Launch",
                subtitle: "Ship it fast",
                copy: "Implement with Next.js and deploy to production with performance and SEO in mind.",
              },
            ].map((step,index)=>(
                <motion.div
                key={step.title}
                className="relative pl-4"
                initial={{opacity:0,x:-40}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true,amount:0.4}}
                transition={{duration:0.6,delay:index * 0.12}}
                style={{transform:`translateY(${processOffset *(0.08 * index)}px)`}}
                >
                    <div className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-[#020617] text-xs font-semibold text-slate-300">
                        {index + 1}
                    </div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
                        {step.subtitle}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-50">
                        {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300">
                        {step.copy}
                    </p>

                </motion.div>
            ))
            }

            </div>

        </div>
    </section>
    
    

       
     
    </>
  );
}
export default Page;
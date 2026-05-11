"use client";

import { Card, CardContent, Typography } from "@mui/material";
import useParallax from "../hooks/useParallax";
import { motion} from "framer-motion";



const Page: React.FC = () => {
     const cardsOffset = useParallax(0.15);
  return (
    <>
      {/* Features Section */}
   <section id="featuress" className="relative z-10 bg-[#050816] px-6 py-20 md:px-10 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, rgba(145,94,255,0.2), transparent 60%)",
            transform: `translateY(${cardsOffset * -0.5}px)`,
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
            <h2 className="text-2xl font-semibold md:text-4xl">
              Layers of{" "}
              <span className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text text-transparent">
                Motion
              </span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 md:text-lg">
              Combine utility classes with Material UI components to get the
              best of both design systems.
            </p>
          </motion.div>
           <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Smooth Parallax",
                description:
                  "Use scroll position to subtly move background layers and create depth.",
              },
              {
                title: "Design Systems",
                description:
                  "Combine Tailwind layouts with MUI components for faster iteration.",
              },
              {
                title: "Production Ready",
                description:
                  "Built on Next.js App Router with TypeScript, optimized for performance.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card
                  className="border border-slate-800 bg-[#0b1020]/80 backdrop-blur-md"
                  elevation={4}
                  sx={{
                    transform: `translateY(${
                      cardsOffset * (0.08 * (i - 1))
                    }px)`,
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <CardContent className="space-y-3 p-6">
                    <Typography
                      variant="h6"
                      className="bg-linear-to-r from-[#00E5FF] to-[#915EFF] bg-clip-text font-semibold text-transparent"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" className="text-slate-300">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
    </section>
     
       
       
     
    </>
  );
}
export default Page;
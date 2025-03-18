"use client";
// import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import Image from 'next/image'

// const MotionDiv = dynamic(
//   () => import("framer-motion").then((mod) => mod.motion.div),
//   { ssr: false }
// );

export default function Page() {
  const congratRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (congratRef.current) {
        congratRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section>
        <div className="pages-banner services">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 className="banner-title">Status</h1>
            </div>
          </div>
        </div>

        <div
          ref={congratRef}
          className="flex items-center justify-center h-100 bg-gray-100"
          style={{ padding: "5px" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className="text-4xl font-bold text-green-600 mb-4"
              style={{ fontSize: "2.3rem" }}
            >
              You are eligible to apply!
            </h1>
            <p className="text-gray-700 mb-8">
              Congratulations! You meet the requirements to apply for the
              program.
            </p>
            <Link
              href="/"
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              style={{ marginTop: "10px" }}
            >
              Go Back
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

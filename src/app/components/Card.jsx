"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Card({ icon, title, description, pdf }) {
  return (
    <div className="bg-primary-foreground p-6 rounded-xl border border-primary-200 flex flex-col gap-4 h-[30em] w-full max-w-[600px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-center items-center">
        <Icon icon={icon} className="text-primary-500 text-6xl lg:text-5xl" />
      </div>
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl lg:text-2xl font-bold">{title}</h2>
        <p className="text-2xl lg:text-lg text-secondary-700">{description}</p>
      </div>
      <div className="flex justify-center">
        <Link
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-500 text-primary-foreground w-[90%] h-12 lg:h-10 flex justify-center items-center rounded-xl text-2xl lg:text-lg font-bold transition-all hover:scale-105"
        >
          Abrir PDF
        </Link>
      </div>
    </div>
  );
}

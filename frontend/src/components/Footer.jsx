import { footerLinks } from "../assets/siteData";

export default function Footer({ compact = false }) {
  return (
    <footer
      className={`w-full bg-[#0E0E0E] px-8 py-12 ${
        compact
          ? "mt-20 flex flex-col items-center justify-between gap-8 md:flex-row"
          : "flex flex-col items-center justify-between font-body text-xs tracking-tight md:flex-row"
      }`}
    >
      <div className="mb-8 md:mb-0">
        <span className="mb-2 block text-lg font-bold text-white">
          S3ADA STORE
        </span>
        <p className="text-gray-500">
          © 2024 S3ADA Store. Your Digital Gateway in Egypt.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {footerLinks.map((item) => (
          <a
            key={item}
            className="text-gray-500 transition-colors hover:text-white"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="mt-8 flex gap-4 md:mt-0">
        <span className="font-label uppercase tracking-widest opacity-80 text-primary">
          EST. 2024
        </span>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

export default function ProductCard({
  product,
  image,
  badge,
  badgeClass,
  meta,
  category,
  accent = "primary",
}) {
  const accentClasses =
    accent === "secondary"
      ? {
          border: "hover:border-secondary/20",
          text: "group-hover:text-secondary",
          button: "hover:bg-secondary hover:text-black",
          price: "text-secondary",
        }
      : {
          border: "hover:border-primary/20",
          text: "group-hover:text-primary",
          button: "hover:bg-primary hover:text-white",
          price: "text-primary",
        };

  return (
    <div
      className={`group relative border border-transparent bg-surface-container-low transition-all duration-500 ${accentClasses.border}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
        />
        <div className="absolute right-0 top-0 p-3">
          <span
            className={`px-2 py-0.5 font-label text-[10px] font-bold uppercase tracking-widest ${badgeClass}`}
          >
            {badge}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3
            className={`font-headline text-lg font-bold uppercase tracking-tight text-white transition-colors ${accentClasses.text}`}
          >
            {product.name}
          </h3>
          <span className="bg-surface-container-high px-2 py-1 font-label text-[10px] uppercase text-gray-500">
            {category}
          </span>
        </div>
        <p className="mb-6 font-body text-xs text-gray-500">{meta}</p>
        <div className="flex items-end justify-between">
          <div>
            <p className="font-label text-[10px] uppercase text-gray-500">
              Starts at
            </p>
            <p className="font-headline text-xl font-black text-white">
              {product.price}{" "}
              <span className={`text-xs font-normal ${accentClasses.price}`}>
                EGP
              </span>
            </p>
          </div>
          <Buttons
            as={Link}
            className={`bg-white/5 px-4 py-2 font-label text-xs uppercase text-gray-400 transition-all ${accentClasses.button}`}
            to="/checkout"
          >
            Select
          </Buttons>
        </div>
      </div>
    </div>
  );
}
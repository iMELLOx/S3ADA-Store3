import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { productVisuals, routeLinks } from "../assets/siteData";

export default function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        if (!ignore) {
          setProducts(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadProducts();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface">
      <Navbar />
      <div className="flex min-h-screen pt-20">
        <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-outline-variant/10 bg-[#131313]/60 pt-20 backdrop-blur-xl lg:flex">
          <div className="p-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-surface-container-highest">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold uppercase tracking-tight text-white">S3ADA User</p>
                <p className="font-label text-[10px] uppercase text-gray-500">Digital Gateway</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="mb-4 font-label text-[10px] uppercase tracking-[0.2em] text-primary/50">Navigation</p>
              {routeLinks.map((item) => (
                <Link
                  key={item.to}
                  className={`group flex items-center gap-3 px-4 py-3 font-['Space_Grotesk'] font-bold transition-all duration-300 ${
                    item.to === "/products" ? "bg-[#1C1B1B] text-[#00E5FF]" : "text-gray-500 hover:bg-[#2A2A2A]"
                  }`}
                  to={item.to}
                >
                  <span className="material-symbols-outlined transition-transform group-hover:scale-110">{item.icon}</span>
                  <span className="text-sm uppercase tracking-wider">{item.label}</span>
                </Link>
              ))}
            </div>
            <div className="mt-12">
              <p className="mb-4 font-label text-[10px] uppercase tracking-[0.2em] text-secondary/50">Filters</p>
              <div className="space-y-6">
                <div>
                  <label className="mb-3 block text-[10px] uppercase text-gray-400">Price Range</label>
                  <input className="h-1 w-full appearance-none bg-surface-container-high accent-secondary" type="range" />
                  <div className="mt-2 flex justify-between font-label text-[10px] text-gray-500">
                    <span>0 EGP</span>
                    <span>5000 EGP</span>
                  </div>
                </div>
                <div>
                  <label className="mb-3 block text-[10px] uppercase text-gray-400">Popularity</label>
                  <div className="space-y-2">
                    {["Hot Releases", "Best Sellers"].map((item) => (
                      <label key={item} className="group flex cursor-pointer items-center gap-2">
                        <input className="rounded-none border-outline-variant bg-transparent text-secondary focus:ring-0" type="checkbox" />
                        <span className="text-xs uppercase text-gray-500 group-hover:text-secondary">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-10 lg:ml-64">
          <header className="relative mb-12 overflow-hidden border-l-4 border-primary bg-surface-container-low p-8">
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-2">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">System.Online</span>
                <div className="h-[1px] w-12 bg-secondary/30" />
              </div>
              <h1 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl">
                Digital <span className="italic text-primary">Arsenal</span>
              </h1>
              <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-gray-400">
                Access premium gaming credits, global gift cards, and instant communication top-ups. Zero latency, total security.
              </p>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
              <span className="select-none font-headline text-[12rem] font-black leading-none text-white">S3</span>
            </div>
          </header>

          {loading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-[360px] animate-pulse bg-surface-container-low" />
              ))}
            </div>
          ) : error ? (
            <div className="border-l-2 border-primary bg-surface-container-low p-6 text-sm text-primary">{error}</div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => {
                const visual = productVisuals[index % productVisuals.length];
                return (
                  <ProductCard
                    key={product.id}
                    badge={visual.badge}
                    badgeClass={visual.badgeClass}
                    category={visual.category}
                    image={visual.image}
                    meta={visual.meta}
                    product={product}
                    accent={visual.accent}
                  />
                );
              })}

              <div className="relative flex flex-col justify-between border-l-2 border-secondary bg-surface-container-high p-8">
                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-secondary/30">
                    <span className="material-symbols-outlined text-secondary">bolt</span>
                  </div>
                  <h3 className="mb-4 font-headline text-xl font-bold uppercase tracking-tight text-white">Instant Access Protocol</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    All purchases are processed through our high-speed gateway. Codes are delivered via SMS and your account dashboard within 60 seconds of confirmation.
                  </p>
                </div>
                <ul className="space-y-3">
                  {["No Middlemen", "Official Licenses"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-label text-xs uppercase text-secondary">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <section className="mt-20 border-t border-outline-variant/10 pt-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 font-headline text-3xl font-black uppercase tracking-tighter text-white">
                  How to Top-up <span className="text-primary">Your Vault</span>
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Select Your Product",
                      text: "Browse our extensive library of games and gift cards. Ensure you've selected the correct region for your account.",
                    },
                    {
                      step: "02",
                      title: "Provide Details",
                      text: "For direct top-ups, enter your Player ID. For gift cards, simply proceed to payment.",
                    },
                    {
                      step: "03",
                      title: "Instant Checkout",
                      text: "Use Vodafone Cash, InstaPay, or any local bank card. Your code is revealed instantly upon payment success.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6">
                      <span className="font-headline text-4xl font-black leading-none text-outline-variant/30">{item.step}</span>
                      <div>
                        <h4 className="mb-2 font-headline font-bold uppercase tracking-wide text-white">{item.title}</h4>
                        <p className="font-body text-sm text-gray-400">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-panel border border-white/5 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                  <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-white">Service Status: Operational</h4>
                </div>
                <div className="mb-8 space-y-4">
                  {[
                    ["Payment Gateway", "12ms Latency"],
                    ["SMS Delivery System", "Active"],
                    ["WhatsApp Support", "98% Response Rate"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-white/5 py-3">
                      <span className="font-label text-xs uppercase text-gray-400">{label}</span>
                      <span className="font-label text-[10px] font-bold uppercase text-secondary">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mb-6 font-body text-[10px] italic leading-relaxed text-gray-500">
                  S3ADA uses end-to-end encryption for all transaction data. Your Player ID is only used for processing the requested top-up. We never store payment credentials.
                </p>
                <button className="w-full border border-primary/40 py-4 font-label text-xs uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary/10">
                  Report an Issue
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer compact />
      <Link className="fixed bottom-6 right-6 z-[100] group" to="/dashboard">
        <div className="relative flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110">
          <span className="material-symbols-outlined text-3xl">chat</span>
          <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
            <div className="h-2 w-2 animate-ping rounded-full bg-[#25D366]" />
          </div>
        </div>
        <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 border border-white/5 bg-surface-container-high px-4 py-2 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="whitespace-nowrap font-label text-[10px] font-bold uppercase tracking-widest text-white">Support Online</p>
        </div>
      </Link>
      <Navbar mobileBottom />
    </div>
  );
}
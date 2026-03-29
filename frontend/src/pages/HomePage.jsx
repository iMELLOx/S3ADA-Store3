import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Buttons from "../components/Buttons";

const [products, setProducts] = useState([]);
useEffect(() => {
  getProducts()
    .then(data => setProducts(data))
    .catch(err => console.error(err));
}, []);
export default function HomePage() {
  return (
    <div className="bg-[#0E0E0E] text-[#e5e2e1]">
      <Navbar />
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-20 flex-col items-center border-r border-outline-variant/10 bg-[#131313]/60 py-24 backdrop-blur-xl md:flex">
        <div className="flex flex-col gap-10">
          {[
            { label: "Home", icon: "home", to: "/", active: true },
            { label: "Shop", icon: "shopping_bag", to: "/products" },
            { label: "Wallet", icon: "shopping_cart", to: "/checkout" },
            { label: "Profile", icon: "person", to: "/dashboard" },
          ].map((item) => (
            <Link key={item.label} className="group flex flex-col items-center gap-1" to={item.to}>
              <span
                className={`material-symbols-outlined p-3 ${
                  item.active
                    ? "bg-[#1C1B1B] text-[#00E5FF]"
                    : "text-gray-500 transition-all duration-300 hover:bg-[#2A2A2A]"
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`font-label text-[10px] uppercase tracking-tighter ${
                  item.active ? "text-[#00E5FF]" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </aside>

      <main className="pt-20 md:ml-20">
        <section className="relative flex h-[870px] items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/80 to-transparent" />
            <img
              alt="server room"
              className="h-full w-full object-cover opacity-40 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmAndu5rHvm8VU1T_fjf3Q-XjM3Sla5xe6QhSu_YYfgTpCIuzmP-uv5pmCP5dPylAIiRECQtoJgvqCkSeDOsBPxruucfLW-NgzC66_I5L7GebTjqHohaTUe0etvNn98KIm0MNSA_3Ro55l9KSn0ea6wc2aQ_0Omh360WVtV1_BwMeg9xoLJ0TivgOkdMUD0YNpiXxZIfjitaKUKaIn9buazj-Sg2gAyt8qIyobu3AEtuP3hPL-hpq62b9eeUwnI_nXU3vmi7usg0A"
            />
          </div>
          <div className="container relative z-20 mx-auto px-8">
            <div className="max-w-3xl">
              <span className="mb-4 block font-label text-sm uppercase tracking-[0.4em] text-[#00E5FF]">
                EGYPT'S DIGITAL GATEWAY
              </span>
              <h1 className="mb-8 font-headline text-6xl font-black uppercase italic leading-none tracking-tighter text-white md:text-8xl">
                Fast &amp; Secure
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                  Digital Top-Ups
                </span>
              </h1>
              <div className="flex flex-wrap gap-6">
                <Buttons
                  as={Link}
                  className="glass-panel neon-glow-red border-l-4 border-primary px-10 py-5 font-headline text-lg font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
                  to="/products"
                >
                  Shop Now
                </Buttons>
                <Buttons
                  as={Link}
                  className="glass-panel border-l-4 border-[#00E5FF] px-10 py-5 font-headline text-lg font-bold uppercase tracking-widest text-primary transition-colors hover:text-white"
                  to="/checkout"
                >
                  ابدأ الآن
                </Buttons>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4 opacity-50">
            <span className="font-label text-[10px] uppercase tracking-[0.5em] text-white">
              SCROLL TO EXPLORE
            </span>
            <div className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        <section className="bg-surface-container-lowest px-8 py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                accent: "secondary",
                label: "WEEKEND SPECIAL",
                title: "GAMING RECHARGE +15% BONUS",
                link: "CLAIM NOW",
                border: "border-secondary",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAA0KMWu--q9hmgkyLF1pz_WHla4b8uplRQPqa3wuHDZaqxUQtHGZmWqHKoclngiSO83Raa-sim1DBvw3fxegPfibufZol7NhM-IWtA9yXYMcGvGMZf4QZrNs5Iddw4i8sn1bdJV4lKsnexSE4p-5iOM8_kVB5cnClQziDlGl_ml53XCOl2N9bz9185cssbM8Xbrq-J8V4_YVdEUmMi_FQmlIrZh-lX99H_DUyK4a5gHRYbL5_W4QEx5AXYIQvJ6D3omkuSE95cD6U",
              },
              {
                accent: "primary",
                label: "NEW ARRIVAL",
                title: "GLOBAL STEAM GIFT CARDS",
                link: "EXPLORE STORE",
                border: "border-primary",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZWjLdwQwVO9T_SZSMJD20P48Zgvetcuw8kRbTDa4ITYjxETBF0ipX0Yi-c7_Us-MjR6p4YGqlL0MTrO6rhzODeV0rzxz-7uNfkBsz-6NfJOD5-PC-j_RR3Tlaic1Rou7jDbt2LONBonbngxSE1cY2kzayleLjWA66LOztwouM3weqOb4XxPwRG28EUxCAbgITlRfIvy7sty3z-mGPdU_oC4deLLwM38flggRhjb2DPh5VCeN9SFlLsvnHItHWIitYfL0ABN6kWQI",
              },
            ].map((item) => (
              <div key={item.title} className={`group relative h-[300px] overflow-hidden border-l-2 ${item.border}`}>
                <img alt={item.title} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" src={item.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-10">
                  <span className={`mb-2 font-label text-xs tracking-widest ${item.accent === "secondary" ? "text-secondary" : "text-primary"}`}>
                    {item.label}
                  </span>
                  <h3 className="mb-4 font-headline text-3xl font-bold text-white">{item.title}</h3>
                  <Link className={`font-label text-sm text-white underline underline-offset-8 ${item.accent === "secondary" ? "decoration-secondary" : "decoration-primary"}`} to="/products">
                    {item.link}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-8 py-24">
          <div className="container mx-auto">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-headline text-4xl font-black uppercase italic text-white">Protocol / Categories</h2>
                <div className="mt-2 h-1 w-24 bg-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="group bg-surface-container-low p-1 transition-colors hover:bg-surface-container-high md:col-span-2">
                <div className="relative h-[400px] overflow-hidden">
                  <img alt="Games" className="h-full w-full object-cover opacity-60 grayscale transition-all duration-500 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-KwpesYO-L1gCtpR3zz0JVsuWb9CqDP0muoXSDPhpUXG3C8aiTxu4I49owSSZfPUB7_2Cp_rUOjyHf2tBCniLN9khqF4Sed-7amH3lKbj42dVWQGOesThIL81yk48FBhv_-7lUp0gw-Gv8PxBwFR3L42V-zbZ1lScoMXAXgT2IgMfxjwHKcAHCuaHplbZd71YNDwVwtXrOmIQCByz8dT-0aXCx5Te6Q3iF9TfZ9LQz0TOuCXeQ2sqk5AvKEudvYk2QrotYftweQ" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <span className="self-start bg-primary px-3 py-1 font-label text-[10px] text-on-primary-container">CATEGORY_01</span>
                    <div>
                      <h4 className="mb-2 font-headline text-4xl font-bold text-white">GAMES</h4>
                      <p className="max-w-sm font-body text-sm text-gray-400">Direct top-ups for PUBG, Free Fire, Valorant and more. Instant delivery to your ID.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group bg-surface-container-low p-1 transition-colors hover:bg-surface-container-high">
                <div className="relative h-[400px] overflow-hidden">
                  <img alt="Gift Cards" className="h-full w-full object-cover opacity-40 transition-all group-hover:opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM-kuENi381sAPbR2wBdxd4ZicpU8gTk_D7PBw-TYVJcPEJoNMeURToaRv-SS_vLGUvr8IdmiaHM_ubq6TiN3Ahc7noaQLNFrTeyD8kwI_n3rzcShdQla7da1M_AKh6h1S0EtHVtP_i0S3aOsf3cfHCtdlqd-kE4f8BoeCcEtYeCSMHeF_GwajFh1tcAj9hwzRRJ39nmFhOzrVmWvwJnsl_YkGhi4CoSU6hNmlbK-CzzBgYyCrlwEk2jh3-9voYgiDL1ytxpbuz-0" />
                  <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <span className="self-start bg-secondary-container px-3 py-1 font-label text-[10px] text-on-secondary-container">CATEGORY_02</span>
                    <div>
                      <h4 className="mb-2 font-headline text-3xl font-bold text-white">GIFT CARDS</h4>
                      <p className="font-body text-sm text-gray-400">iTunes, Google Play, PlayStation, Xbox and Netflix.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group bg-surface-container-low p-1 transition-colors hover:bg-surface-container-high md:col-span-3">
                <div className="relative flex h-[250px] items-center overflow-hidden">
                  <div className="relative z-10 w-1/2 p-12">
                    <span className="mb-2 block font-label text-[10px] tracking-widest text-primary">CATEGORY_03</span>
                    <h4 className="mb-4 font-headline text-4xl font-bold text-white">MOBILE RECHARGE</h4>
                    <p className="max-w-md font-body text-sm text-gray-400">Instantly top up Vodafone, Orange, Etisalat, and WE lines with the best rates in Egypt.</p>
                  </div>
                  <img alt="Mobile Recharge" className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-30 grayscale transition-all group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYIlgBomI7qiExnt7s92rH1KU9_EFxbZcPkRVoHo8ekNpWOhCCkys3yGfhK_BWvo7ZkI13Gwz5kqo3zZ8M0IBMLPPaSrlHA7iFPoW1QM2_1jgfcO4LR3VYnOQyDy1I_dHDazn0wecJnEBXQ2l1sEv__FrsnsO2levMFX43yVU__AJqrBlrkL1V5wVJXPB-rlenSe3KNpF3QcmK4454YtwVu7Eimnf_WunliIMOi_lPx0rbyhxK09y9C9-Ue5N7PBKRFWpMwgIme7M" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-8 py-24">
          <div className="container mx-auto">
            <div className="mb-12 flex items-center gap-4">
              <h2 className="font-headline text-2xl font-bold uppercase tracking-[0.2em] text-white">Trending_Now</h2>
              <div className="h-[1px] flex-grow bg-outline-variant/30" />
            </div>
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.name}
                  className={`glass-panel group relative border-l p-4 transition-all duration-300 ${
                    product.accent === "secondary" ? "border-secondary/20 hover:border-secondary" : "border-primary/20 hover:border-primary"
                  }`}
                >
                  <div className="relative mb-6 aspect-square overflow-hidden bg-surface">
                    <img alt={product.name} className="h-full w-full object-contain p-8 transition-transform duration-500 group-hover:scale-110" src={product.image} />
                  </div>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h5 className="font-headline font-bold text-white">{product.name}</h5>
                    <span className={`px-2 py-0.5 font-label text-[10px] ${product.state === "SOLD OUT" ? "bg-error-container text-on-error-container" : "bg-secondary-container text-on-secondary-container"}`}>
                      {product.state}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-gray-500">{product.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-headline font-bold ${product.accent === "secondary" ? "text-secondary" : "text-primary"}`}>
                      {product.price} EGP
                    </span>
                    <Link className={`material-symbols-outlined transition-colors ${product.icon === "block" ? "cursor-not-allowed text-gray-700" : product.accent === "secondary" ? "text-white hover:text-secondary" : "text-white hover:text-primary"}`} to={product.icon === "block" ? "#" : "/checkout"}>
                      {product.icon}
                    </Link>
                  </div>
                  <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 ${product.accent === "secondary" ? "bg-secondary/5" : "bg-primary/5"}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/10 py-16">
          <div className="container mx-auto grid grid-cols-1 gap-12 px-8 md:grid-cols-3">
            {[
              { icon: "shield", color: "text-secondary", title: "Secure Payments", text: "InstaPay, Vodafone Cash & Bank Cards" },
              { icon: "bolt", color: "text-primary", title: "Instant Delivery", text: "Codes delivered in under 60 seconds" },
              { icon: "headset_mic", color: "text-secondary", title: "24/7 Support", text: "Professional help via WhatsApp chat" },
            products.map((product) => (
              <div key={item.title} className="flex items-center gap-6">
                <span className={`material-symbols-outlined text-5xl ${item.color}`}>{item.icon}</span>
                <div>
                  <h4 className="font-headline text-sm font-bold uppercase tracking-widest text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <Link className="group fixed bottom-8 right-8 z-[100] flex items-center gap-2 bg-[#25D366] p-4 text-white shadow-2xl transition-transform duration-300 hover:scale-110" to="/dashboard">
        <span className="material-symbols-outlined">chat</span>
        <span className="w-0 overflow-hidden font-label text-xs font-bold uppercase transition-all duration-300 group-hover:w-20">Support</span>
      </Link>
    </div>
  );
}

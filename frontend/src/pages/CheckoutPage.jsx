import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const paymentMethods = [
  {
    title: "Vodafone Cash",
    subtitle: "Instant Egyptian Wallet",
    borderClass: "hover:border-primary-container",
    radioClass: "group-hover:border-primary-container",
    dotClass: "bg-primary-container",
    visual: (
      <div className="flex h-12 w-12 items-center justify-center bg-[#E60000]">
        <span className="text-xs font-black text-white">VOD</span>
      </div>
    ),
  },
  {
    title: "InstaPay",
    subtitle: "Real-time Bank Transfer",
    borderClass: "hover:border-secondary",
    radioClass: "group-hover:border-secondary",
    dotClass: "bg-secondary",
    visual: (
      <div className="flex h-12 w-12 items-center justify-center bg-white">
        <span className="px-1 text-center text-[10px] font-black text-black">INSTAPAY</span>
      </div>
    ),
  },
  {
    title: "Orange / Etisalat Cash",
    subtitle: "Carrier Wallet Protocol",
    borderClass: "hover:border-primary-container",
    radioClass: "group-hover:border-primary-container",
    dotClass: "bg-primary-container",
    visual: (
      <div className="flex gap-1">
        <div className="h-8 w-8 bg-[#FF7900]" />
        <div className="h-8 w-8 bg-[#719917]" />
      </div>
    ),
  },
  {
    title: "Credit / Debit Card",
    subtitle: "Visa & MasterCard Gateway",
    borderClass: "hover:border-secondary",
    radioClass: "group-hover:border-secondary",
    dotClass: "bg-secondary",
    visual: (
      <div className="flex gap-2">
        <span className="material-symbols-outlined text-secondary">credit_card</span>
      </div>
    ),
  },
];

export default function CheckoutPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface">
      <Navbar showSearch={false} />
      <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-start gap-12 px-4 pb-20 pt-24 md:px-8 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-7">
          <header className="space-y-2">
            <h1 className="font-headline text-4xl font-black uppercase tracking-tighter md:text-6xl">
              Secure <span className="text-primary">Checkout</span>
            </h1>
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Transaction Protocol // S3-4DA-09
            </p>
          </header>

          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="font-headline text-xl font-bold text-primary">01</span>
              <h2 className="font-headline text-2xl uppercase tracking-wider">Payment Interface</h2>
              <div className="h-[1px] flex-grow bg-outline-variant/20" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.title}
                  className={`group flex flex-col gap-4 border border-transparent bg-surface-container-low p-6 text-left transition-all ${method.borderClass}`}
                >
                  <div className="flex items-start justify-between">
                    {method.visual}
                    <div className={`flex h-4 w-4 items-center justify-center border-2 border-outline-variant ${method.radioClass}`}>
                      <div className={`h-2 w-2 scale-0 transition-transform group-hover:scale-100 ${method.dotClass}`} />
                    </div>
                  </div>
                  <div>
                    <p className="font-headline text-sm font-bold uppercase">{method.title}</p>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{method.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 pt-6 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 md:grid-cols-4">
            {[
              ["verified_user", "SSL SECURE"],
              ["shield_locked", "PCI COMPLIANT"],
              ["token", "V-CASH PARTNER"],
              ["quick_reorder", "INSTANT ASSET"],
            ].map(([icon, label]) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl">{icon}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-center">{label}</span>
              </div>
            ))}
          </section>
        </div>

        <div className="sticky top-24 lg:col-span-5">
          <div className="relative space-y-8 overflow-hidden bg-surface-container-low p-8">
            <div className="absolute -right-16 -top-16 h-32 w-32 bg-primary/5 blur-3xl" />
            <h3 className="flex items-center gap-3 font-headline text-xl uppercase tracking-wider">
              <span className="h-2 w-2 bg-primary" />
              Order Matrix
            </h3>
            <div className="space-y-6">
              {[
                {
                  name: "Valorant Points 5300",
                  meta: "EGY Region // Digital Key",
                  price: "1,250 EGP",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBd61OOV-yUUbpoP-b9g5c89qpK--xYW4nSfJrJaUD46kZ3cCA1bHxCr8K1RltSqh-8wAjCha0w_fkj73HD5TkKaZq24yqgD2h99Y8tMy_-rikbQY3MHjuLARh4ar-ZusoN3iQUsKHSKUoIJuFO4IsVUS1kWOMRpu5q8t0G-Iwmw_u9o4XPOR0WluRfASt_HgfHn1XWG8QwOym86BdLCEJmvPbQeTNNJ0yGGU9Sw0ZLQd49qlQedDrdKUh6wTNhCMSJqlNgbAV4KeA",
                },
                {
                  name: "Netflix 1-Month Gift Card",
                  meta: "Global // Premium UHD",
                  price: "250 EGP",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCj-sAfwBa9WhMKOpbX-LiIdIjhT13E3PtCaX9WX1gV3RLOoQ4MvMvDMf6PTL7dTI0RC5PT1Ud_wMgv_fTB98BDyjwRKznzXRswzm4icLZFnxBt4G7Svyc8HBBG35j_nj9Mps98QKg1ycdln4ILVtzWm8O_pWAQs_tVx0o5tzCrGGMSWVWCu9i_qC0mBTX1-Ag_dxDfDfE2RuEIpYtxZyjBY3CbJKdXS5gOCFaRLATjmdwCI6UaT2F34AKqdy091JOTNKDu6Qehu0Y",
                },
              ].map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-16 w-16 items-center justify-center border border-outline-variant/10 bg-surface-container-high">
                      <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
                    </div>
                    <div>
                      <p className="font-headline text-sm font-bold uppercase">{item.name}</p>
                      <p className="text-[10px] uppercase text-on-surface-variant">{item.meta}</p>
                    </div>
                  </div>
                  <span className="font-headline text-sm">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <label className="font-headline text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Access Code / Coupon</label>
              <div className="flex gap-0">
                <input className="w-full border-b border-outline-variant/40 bg-transparent px-2 py-2 font-headline text-sm uppercase outline-none transition-colors focus:border-secondary" placeholder="ENTER CODE" type="text" />
                <button className="bg-surface-container-high px-4 py-2 font-headline text-xs uppercase tracking-widest transition-colors hover:bg-secondary hover:text-on-secondary">Apply</button>
              </div>
            </div>
            <div className="space-y-3 border-t border-outline-variant/10 pt-4">
              {[
                ["Subtotal Protocol", "1,500 EGP", "text-on-surface-variant"],
                ["Transaction Fee", "15 EGP", "text-on-surface-variant"],
                ["Discount Applied", "-50 EGP", "text-secondary"],
              ].map(([label, value, color]) => (
                <div key={label} className={`flex items-center justify-between text-xs uppercase tracking-widest ${color}`}>
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-4">
                <span className="font-headline text-lg font-black uppercase italic tracking-tighter">Net Payable</span>
                <div className="text-right">
                  <p className="font-headline text-2xl font-black text-primary">1,465 EGP</p>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Inc. All digital taxes</p>
                </div>
              </div>
            </div>
            <button className="neon-glow group relative w-full bg-primary-container py-5 font-headline text-lg font-black uppercase tracking-[0.3em] text-on-primary-container transition-all duration-300">
              <span className="relative z-10">Confirm &amp; Pay</span>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-active:opacity-20" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-primary-container opacity-50" />
            </button>
            <p className="text-center text-[10px] uppercase tracking-widest leading-relaxed text-on-surface-variant">
              By confirming, you agree to S3ADA digital service terms. Delivery is processed within 60 seconds of confirmation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
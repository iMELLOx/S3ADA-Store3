import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserDashboardPage() {
  return (
    <div className="bg-surface text-on-surface">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col bg-[#131313]/60 shadow-[0_0_40px_rgba(255,0,60,0.05)] backdrop-blur-xl md:flex">
        <div className="p-8">
          <h1 className="font-headline text-2xl font-black uppercase italic tracking-tighter text-[#FF003C]">S3ADA</h1>
          <div className="mt-8 flex items-center gap-4 bg-[#1C1B1B] p-4">
            <div className="flex h-10 w-10 items-center justify-center bg-primary-container">
              <span className="material-symbols-outlined text-on-primary-container">person</span>
            </div>
            <div>
              <p className="font-headline text-sm font-bold text-[#00E5FF]">S3ADA User</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500">Digital Gateway</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-2 px-4">
          {[
            { label: "Home", icon: "home", to: "/" },
            { label: "Shop", icon: "shopping_bag", to: "/products" },
            { label: "Wallet", icon: "shopping_cart", to: "/checkout" },
            { label: "Profile", icon: "person", to: "/dashboard", active: true },
          ].map((item) => (
            <Link
              key={item.label}
              className={`flex items-center gap-4 px-4 py-4 font-headline font-bold transition-all duration-300 ${
                item.active ? "bg-[#1C1B1B] text-[#00E5FF]" : "text-gray-500 hover:bg-[#2A2A2A]"
              }`}
              to={item.to}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-8 text-[10px] uppercase tracking-tighter leading-relaxed text-gray-600">
          SYSTEM_ID: S3-99X
          <br />
          STATUS: ENCRYPTED
          <br />
          NODE: CAI-01
        </div>
      </aside>

      <main className="flex min-h-screen flex-col md:ml-64">
        <Navbar />
        <div className="mx-auto w-full max-w-7xl space-y-12 p-6 pt-24 md:p-12 md:pt-28">
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="group relative overflow-hidden bg-surface-container-low p-8 lg:col-span-2">
              <div className="absolute -right-32 -top-32 h-64 w-64 bg-primary/5 blur-[100px]" />
              <div className="relative z-10 flex h-full flex-col justify-between md:flex-row">
                <div>
                  <h2 className="mb-2 font-headline text-xs uppercase tracking-[0.3em] text-primary">Authenticated User</h2>
                  <h3 className="mb-6 font-headline text-4xl font-black uppercase tracking-tighter text-on-surface md:text-5xl">Ahmed Hassan</h3>
                  <div className="space-y-2 font-mono text-sm text-gray-500">
                    <p>UID: <span className="text-secondary">#7729-X01</span></p>
                    <p>EMAIL: <span className="text-on-surface">ahmed.h@s3ada.eg</span></p>
                    <p>MEMBER SINCE: <span className="text-on-surface">MAR 2024</span></p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col items-end justify-between md:mt-0">
                  <div className="text-right">
                    <p className="mb-1 text-[10px] uppercase tracking-widest text-gray-500">Current Balance</p>
                    <p className="font-headline text-5xl font-bold tracking-tighter text-secondary">1,450.00 <span className="text-xl">EGP</span></p>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button className="bg-primary px-8 py-3 font-headline text-xs font-bold uppercase tracking-widest text-on-primary transition-all active:scale-95 hover:bg-primary-container">Add Funds</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between border-l-4 border-secondary/20 bg-[#1C1B1B] p-8">
              <div>
                <h2 className="mb-4 font-headline text-xs uppercase tracking-[0.3em] text-secondary">Last Operation</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-gray-500">Product</span>
                    <span className="text-sm font-bold">PUBG Mobile UC (600)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-gray-500">Cost</span>
                    <span className="text-sm font-bold">320.00 EGP</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 flex w-full items-center justify-center gap-2 border border-secondary px-6 py-4 font-headline text-xs font-bold uppercase tracking-widest text-secondary transition-all hover:bg-secondary/10">
                <span className="material-symbols-outlined text-sm">replay</span>
                Recharge Last Order
              </button>
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="flex items-center gap-3 font-headline text-2xl font-black uppercase italic tracking-tighter">
                <span className="h-[2px] w-8 bg-primary" />
                Order History
              </h2>
              <a className="font-headline text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-primary" href="#">
                View All Archive
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-surface-container-high/50 font-headline text-[10px] uppercase tracking-widest text-gray-500">
                    <th className="p-4 font-medium">Transaction ID</th>
                    <th className="p-4 font-medium">Service / Product</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 text-right font-medium">Amount</th>
                    <th className="p-4 text-center font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ["#TRX-99201", "Steam Gift Card $10", "2024-05-12 14:30", "550.00 EGP", "Success", "bg-secondary-container/20 text-secondary-fixed"],
                    ["#TRX-99188", "Vodafone Cash Top-up", "2024-05-10 09:15", "1,000.00 EGP", "Success", "bg-secondary-container/20 text-secondary-fixed"],
                    ["#TRX-99052", "PlayStation Store $25", "2024-05-08 22:45", "1,250.00 EGP", "Failed", "bg-error-container/20 text-error"],
                    ["#TRX-99011", "Google Play Gift Card $5", "2024-05-05 18:20", "280.00 EGP", "Pending", "bg-surface-container-highest text-gray-400"],
                  ].map(([id, service, date, amount, status, badge], index) => (
                    <tr key={id} className={`group transition-colors hover:bg-surface-container-low ${index === 0 ? "" : "border-t border-surface-container-high"}`}>
                      <td className="p-4 font-mono text-gray-400">{id}</td>
                      <td className="p-4 font-bold">{service}</td>
                      <td className="p-4 text-gray-500">{date}</td>
                      <td className="p-4 text-right font-bold">{amount}</td>
                      <td className="p-4 text-center">
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${badge}`}>{status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-12 pt-8 md:grid-cols-2">
            <div>
              <h2 className="mb-8 font-headline text-2xl font-black uppercase italic tracking-tighter">System Settings</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-gray-500">Notification Channels</label>
                  <div className="flex items-center justify-between bg-surface-container-low p-4">
                    <span className="text-sm">Email Alerts on Transaction</span>
                    <div className="relative h-5 w-10 cursor-pointer bg-primary">
                      <div className="absolute right-0 top-0 h-5 w-5 bg-on-primary" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block font-headline text-[10px] uppercase tracking-[0.2em] text-gray-500">Two-Factor Authentication</label>
                  <div className="flex items-center justify-between border-l-2 border-secondary bg-surface-container-low p-4">
                    <span className="text-sm">Status: SECURE (SMS Active)</span>
                    <button className="font-headline text-xs uppercase tracking-widest text-secondary hover:underline">Configure</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-8 font-headline text-2xl font-black uppercase italic tracking-tighter">Access Keys</h2>
              <div className="space-y-4">
                {[
                  ["key", "Reset Password"],
                  ["alternate_email", "Change Primary Email"],
                ].map(([icon, label]) => (
                  <button key={label} className="group flex w-full items-center justify-between bg-surface-container-low p-4 transition-all hover:bg-surface-container-high">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-gray-500">{icon}</span>
                      <span className="text-sm">{label}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-gray-600 transition-colors group-hover:text-on-surface">arrow_forward_ios</span>
                  </button>
                ))}
                <button className="group flex w-full items-center justify-between border border-error-container/20 bg-error-container/10 p-4 transition-all hover:bg-error-container/20">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-error">logout</span>
                    <span className="text-sm text-error">Terminate Session</span>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>

      <Link className="fixed bottom-8 right-8 z-[60] flex items-center justify-center bg-[#25D366] p-4 text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95" to="/checkout">
        <span className="material-symbols-outlined">chat</span>
      </Link>
      <Navbar mobileBottom />
      <div className="pointer-events-none fixed inset-0 z-[100] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />
    </div>
  );
}
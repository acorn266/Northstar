import logo from "../../assets/logo/northstar-logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Northstar Logo"
        className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
      />

      <div className="leading-tight">
        <h1 className="text-2xl font-bold tracking-tight sm:text-[30px]">
          <span className="text-white">Northstar</span>
        </h1>

        <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#9CA3AF]">
          Track • Learn • Grow
        </p>
      </div>
    </div>
  );
}
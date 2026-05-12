import logo from "@/assets/logo.png";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return <img src={logo} alt="Zion Hill School crest" className={className} width={512} height={512} />;
}

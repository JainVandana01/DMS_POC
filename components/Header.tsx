import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
    <div className="flex w-full h-full justify-between max-w-7xl px-4">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image
            width="250"
            height="50"
            src="/Suzuki-logo.png"
            alt="suzuki-logo"
          />
        </div>
      </Link>
    </div>
  </div>
);

export default Header;

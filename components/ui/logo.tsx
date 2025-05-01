import Link from "next/link";
import Image from "next/image";
import Logo01 from "@/public/images/ELAM.svg";

export default function Logo() {
  return (
    <Link href="#principal" className="inline-flex" aria-label="Cruip">
      <Image
        className="mx-auto relative"
        src={Logo01}
        height={100}
        width={200}
        alt="Logo 01"
      />
    </Link>
  );
}

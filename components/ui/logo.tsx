import Link from "next/link";
import FeaturesBg from "@/public/images/gooba.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      {/* Replace the <svg> element with <Image> */}
      <Image src={FeaturesBg} alt="Logo" width={42} height={42} />
    </Link>
  );
}

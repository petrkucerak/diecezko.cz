import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col-reverse md:flex-row justify-between flex-wrap items-center w-[90vw]">
        <p className="font-light my-6">
          © 2023,{" "}
          <Link
            href="https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez"
            target="_blank"
            rel="external"
            className="hover:underline"
          >
            DCM Hradec Králové
          </Link>
        </p>
        <div className="flex flex-row items-center justify-around min-w-[150px]">
          <Link
            href="https://www.facebook.com/DCM.HradecKralove"
            target="_blank"
            rel="external"
          >
            <IconBrandFacebook className="inline" stroke={1.3} />
          </Link>
          <Link
            href="https://www.instagram.com/dcm_hk/"
            target="_blank"
            rel="external"
          >
            <IconBrandInstagram className="inline" stroke={1.3} />
          </Link>
          <Link
            href="https://github.com/petrkucerak/diecezko.cz"
            target="_blank"
            rel="external"
          >
            <IconBrandGithub className="inline" stroke={1.3} />
          </Link>
        </div>
      </div>
    </div>
  );
}
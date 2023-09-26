import ContainerImage from "./layouts/container-image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default function Vikariat({
  className,
  description,
  name,
  cover,
  person1,
  person2,
  priest,
  social,
}) {
  return (
    <div className={`${className}`}>
      {cover !== undefined ? (
        <ContainerImage
          pngPath={cover.png}
          jpgPath={cover.jpg}
          webpPath={cover.webp}
          altText={cover.alt}
          className="w-full my-2"
        />
      ) : null}
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="tracking-wide mb-2">{description}</p>
      <h3 className="text-xl font-semibold">Zástupci</h3>
      <ul className="">
        {priest !== undefined ? <li>{priest}</li> : null}
        {person1 !== undefined ? <li>{person1}</li> : null}
        {person2 !== undefined ? <li>{person2}</li> : null}
        {social !== undefined ? (
          <li className="mt-2">
            {social.facebook !== undefined ? (
              <Link
                href={social.facebook}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
            ) : null}
            {social.instagram !== undefined ? (
              <Link
                href={social.instagram}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
            ) : null}
            {social.youtube !== undefined ? (
              <Link
                href={social.youtube}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
            ) : null}
            {social.web !== undefined ? (
              <Link
                href={social.web}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
            ) : null}
          </li>
        ) : null}
      </ul>
    </div>
  );
}

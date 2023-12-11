import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
import ProfileCard from "./layouts/profile-card";
export default function Vikariat({
  className,
  description,
  name,
  person1,
  person2,
  person3,
  priest,
  social,
  coordinator,
}) {
  return (
    <div className={`${className} w-full mb-12`} id={name}>
      <h2 className="text-2xl font-semibold">{name}</h2>
      {description !== undefined ? (
        <p
          className="tracking-wide mb-2 italic"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      ) : null}
      {social !== undefined ? (
        <div className="mb-2">
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
        </div>
      ) : null}
      <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center mt-4">
        {priest !== undefined ? (
          <ProfileCard
            className={``}
            name={priest.name}
            title={"Kaplan pro mládež"}
            jpgPath={priest.jpgPath}
            webpPath={
              priest.webpPath === undefined
                ? `${priest.jpgPath}`.replace(".jpg", ".webp")
                : priest.webpPath
            }
            altText={`Profilová fotka kaplana pro mládež ${priest.name}`}
          />
        ) : null}
        {coordinator !== undefined ? (
          <ProfileCard
            className={``}
            name={coordinator.name}
            title={"Koordinátor mládeže"}
            jpgPath={coordinator.jpgPath}
            webpPath={
              coordinator.webpPath === undefined
                ? `${coordinator.jpgPath}`.replace(".jpg", ".webp")
                : coordinator.webpPath
            }
            altText={`Profilová fotka koordinátora mládeže ${coordinator.name}`}
          />
        ) : null}
        {person1 !== undefined ? (
          <ProfileCard
            className={``}
            name={person1.name}
            title={"Vikariátní zástupce"}
            jpgPath={person1.jpgPath}
            webpPath={
              person1.webpPath === undefined
                ? `${person1.jpgPath}`.replace(".jpg", ".webp")
                : person1.webpPath
            }
            altText={`Profilová fotka zástupce pro mládež ${person1.name}`}
          />
        ) : null}
        {person2 !== undefined ? (
          <ProfileCard
            className={``}
            name={person2.name}
            title={"Vikariátní zástupce"}
            jpgPath={person2.jpgPath}
            webpPath={
              person2.webpPath === undefined
                ? `${person2.jpgPath}`.replace(".jpg", ".webp")
                : person2.webpPath
            }
            altText={`Profilová fotka zástupce pro mládež ${person2.name}`}
          />
        ) : null}
        {person3 !== undefined ? (
          <ProfileCard
            className={``}
            name={person3.name}
            title={"Vikariátní zástupce"}
            jpgPath={person3.jpgPath}
            webpPath={
              person3.webpPath === undefined
                ? `${person3.jpgPath}`.replace(".jpg", ".webp")
                : person3.webpPath
            }
            altText={`Profilová fotka zástupce pro mládež ${person3.name}`}
          />
        ) : null}
      </div>
    </div>
  );
}

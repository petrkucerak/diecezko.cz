import {
  IconChefHat,
  IconMasksTheater,
  IconMoodCrazyHappy,
  IconMusic,
  IconPencil,
  IconPray,
  IconUser,
} from "@tabler/icons";

export default function ParmIcon({ className, iconName }) {
  const size = 24;
  if (iconName === "theater")
    return (
      <IconMasksTheater
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "music")
    return (
      <IconMusic
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "pray")
    return (
      <IconPray
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "person")
    return (
      <IconUser
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "happy")
    return (
      <IconMoodCrazyHappy
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "food")
    return (
      <IconChefHat
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "registration")
    return (
      <IconPencil
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
}

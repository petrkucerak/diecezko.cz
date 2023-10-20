import {
  IconMasksTheater,
  IconMoodCrazyHappy,
  IconMusic,
  IconPray,
  IconUser,
} from "@tabler/icons";

export default function ParmIcon({ className, iconName }) {
  const size = 23;
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
}

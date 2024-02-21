import {
  IconBallFootball,
  IconBrush,
  IconChefHat,
  IconCoffee,
  IconCross,
  IconHeartBroken,
  IconMasksTheater,
  IconMoodCrazyHappy,
  IconMusic,
  IconPencil,
  IconPray,
  IconUser,
} from "@tabler/icons";

export default function ParmIcon({ className, iconName, size }) {
  size == undefined ? (size = 24) : null;
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
  else if (iconName === "cafe")
    return (
      <IconCoffee
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "sport")
    return (
      <IconBallFootball
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "workshop")
    return (
      <IconBrush
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "heart")
    return (
      <IconHeartBroken
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
  else if (iconName === "cross")
    return (
      <IconCross
        className={`inline ${className} mr-1`}
        stroke={1.5}
        size={size}
      />
    );
}

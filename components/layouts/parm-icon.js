import { IconMasksTheater } from "@tabler/icons";

export default function ParmIcon({ className, iconName }) {
  if (iconName === "theater")
    return (
      <IconMasksTheater
        className={`inline ${className}`}
        stroke={1.5}
        size={28}
      />
    );
}

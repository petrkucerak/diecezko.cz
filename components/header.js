import { IconMenu2 } from "@tabler/icons";

export default function Header() {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div>
        <div className="text-3xl font-caveatBrush m-4">Diecézko.cz</div>
      </div>
      <div>
        <IconMenu2 className="m-4 cursor-pointer" />
      </div>
    </div>
  );
}

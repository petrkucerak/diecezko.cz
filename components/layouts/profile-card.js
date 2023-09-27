import ContainerImage from "./container-image";

export default function ProfileCard({
  className,
  name,
  jpgPath,
  pngPath,
  webpPath,
  altText,
  description,
}) {
  return (
    <div
      className={`${className} w-full my-4 md:my-0 flex flex-col items-left border-[#444] border rounded-xl p-6 transition hover:scale-[1.02] hover:rotate-1`}
    >
      <ContainerImage
        pngPath={pngPath}
        jpgPath={jpgPath}
        webpPath={webpPath}
        altText={altText}
        className={`!rounded-full h-32`}
      />
      <div className="w-full">
        <h4 className="font-bold text-xl mb-0 mt-2">{name}</h4>
        <p
          className="w-full"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}

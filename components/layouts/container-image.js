export default function ContainerImage({
  className,
  pngPath,
  jpgPath,
  webpPath,
  altText,
}) {
  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <source srcSet={jpgPath} type="image/jpeg" />
      <img
        alt={altText}
        loading="lazy"
        src={pngPath !== undefined ? pngPath : jpgPath}
        className={`rounded-xl ${className}`}
      />
    </picture>
  );
}

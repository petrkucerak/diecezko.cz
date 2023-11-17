export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center min-h-[100vh] justify-center font-titilliumWeb">
      <img src="/assets/images/404.png" width={100} height={100} />
      <h1 className="font-mono text-4xl font-bold mt-2">404 code</h1>
      <p className="text-2xl mb-1">Upppsssss...</p>
      <p>Vypadá to, že takhle stránka někam ufrnkla :(</p>
    </div>
  );
}

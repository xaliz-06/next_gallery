import Link from "next/link";

const imagesLinks = [
  "https://eoa1bgd6ac.ufs.sh/f/qqPmVpKVG1LOjR2WeJzy9pvFWxCtVcKdNreBT3kOE5ZfXIgm",
  "https://eoa1bgd6ac.ufs.sh/f/qqPmVpKVG1LOEn9eTwUKL0ThwxPmdHR43CFIseAkvj8iQ57V",
  "https://eoa1bgd6ac.ufs.sh/f/qqPmVpKVG1LOWUIIFWpL4gxYv19jJXZKc65huiyHfMeqCT7P",
  "https://eoa1bgd6ac.ufs.sh/f/qqPmVpKVG1LOLqhUtCn8PMCuoyeJqF9N6rKfzdHXi3vSURt1",
];

const mockImages = [...imagesLinks, ...imagesLinks, ...imagesLinks].map(
  (link, index) => ({
    id: index,
    src: link,
    alt: `Image ${index + 1}`,
  }),
);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-wrap">
        {mockImages.map(({ id, src, alt }) => (
          <div
            key={id}
            className="m-2 flex w-1/5 items-center justify-center bg-slate-400 p-2"
          >
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </main>
  );
}

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image) => (
        <div
          key={image.id}
          className="m-2 flex h-[40vh] w-1/5 items-center justify-center bg-slate-400 p-2"
        >
          <Image
            src={image.url}
            alt={image.name}
            style={{ objectFit: "contain" }}
            width={320}
            height={320}
          />
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex flex-row gap-6">
        <SignedOut>
          <h2 className="h-full w-full text-center text-3xl">Please Sign In</h2>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}

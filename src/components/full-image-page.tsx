import { clerkClient } from "@clerk/nextjs/server";
import { deleteMyImage, getMyImage } from "~/server/queries";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getMyImage(props.id);

  const clerk = await clerkClient();
  const userInfo = await clerk.users.getUser(image.userId);

  return (
    <div className="grid h-full w-full grid-cols-[auto,1fr] gap-6">
      <div className="flex items-center justify-center p-8">
        <img
          src={image.url}
          className="max-h-[80vh] max-w-[80vw] object-contain"
          alt={image.name}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 p-10">
        <div className="text-xl font-bold">{image.name}</div>
        <div className="flex flex-col py-2">
          <span className="font-semibold">Uploaded By:</span>
          <span className="text-lg font-bold">{userInfo.fullName}</span>
        </div>
        <div className="flex flex-col py-2">
          <span className="font-semibold">Created On:</span>
          <span className="text-lg font-bold">
            {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="flex flex-col py-2">
          <form
            action={async () => {
              "use server";
              await deleteMyImage(props.id);
              redirect("../../");
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

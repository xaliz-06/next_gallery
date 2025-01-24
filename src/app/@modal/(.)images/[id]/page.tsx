import { getMyImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (Number.isNaN(parseInt(photoId)))
    return <div className="text-red">Invalid ID</div>;

  const image = await getMyImage(parseInt(photoId));
  return (
    <div className="text-red">
      <img src={image.url} className="w-96" alt={image.name} />
    </div>
  );
}

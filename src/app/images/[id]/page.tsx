import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (Number.isNaN(parseInt(photoId)))
    return (
      <div>
        <h3 className="text-red">Invalid ID</h3>
      </div>
    );

  return (
    <div>
      <FullPageImageView id={parseInt(photoId)} />
    </div>
  );
}

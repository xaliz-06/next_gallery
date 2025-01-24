import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (Number.isNaN(parseInt(photoId)))
    return (
      <Modal>
        <h3 className="text-red">Invalid ID</h3>
      </Modal>
    );

  return (
    <Modal>
      <FullPageImageView id={parseInt(photoId)} />
    </Modal>
  );
}

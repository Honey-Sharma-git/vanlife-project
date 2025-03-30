import { useOutletContext } from "react-router-dom";
export const HostVanPhotos = () => {
  const vanDetail = useOutletContext();
  return (
    <article>
      <img
        className="h-20 rounded-lg"
        src={vanDetail.imageUrl}
        alt={vanDetail.description}
      />
    </article>
  );
};

import { useOutletContext } from "react-router-dom";
export const HostVanInfo = () => {
  const vanDetail = useOutletContext();
  return (
    <article className="flex flex-col gap-3">
      <p>
        <span className="font-bold">Name: </span> <span>{vanDetail.name}</span>
      </p>
      <p>
        <span className="font-bold">Category: </span>
        <span>{vanDetail.type}</span>
      </p>
      <p>
        <span className="font-bold">Description: </span>
        <span>{vanDetail.description}</span>
      </p>
      <p>
        <span className="font-bold">Visibility: </span> <span>Public</span>
      </p>
    </article>
  );
};

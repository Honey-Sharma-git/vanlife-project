import { useOutletContext } from "react-router-dom";
export const HostVanPricing = () => {
  const vanDetail = useOutletContext();
  return (
    <article>
      <p>
        <span className="text-2xl font-bold">{`$${vanDetail.price}`}</span>
        <span>/day</span>
      </p>
    </article>
  );
};

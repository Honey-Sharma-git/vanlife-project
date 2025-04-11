import { useRouteError } from "react-router-dom";
export const ErrorElement = () => {
  const errorObj = useRouteError();
  console.log(errorObj);
  return <>    
  
  <h1>Error: {errorObj.message}</h1>
  <pre>{errorObj.status} - {errorObj.statusText}</pre>
  </>
};

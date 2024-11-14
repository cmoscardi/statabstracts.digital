import { useLocation } from "react-router-dom";
import getUrlParam from "../utils/getUrlParam";
import BuildResultPage from "../containers/buildResultPage";
import GetDataById from "../hooks/getDataById";

export default function ResultPage() {
  const location = useLocation();
  console.log("location state:", location.state);
  // do we have data being passed from the previous page?
  if (location.state === null) {
    const paramId = getUrlParam("id");
    // do we have a 'id' url param?
    if (paramId) {
      return <GetDataById paramId={paramId}/>
    } else {
      window.location.replace("/404");
      return null;
    }
  } else {
    // ({ orig_url, title, url, page, id } = location.state);
    const resultObj = location.state;
    return (
      <>
        <BuildResultPage resultObj={resultObj} />
      </>
    );
  }
}

import { useLocation, useParams } from "react-router-dom";
import getUrlParam from "../utils/getUrlParam";
import BuildResultPage from "../containers/buildResultPage";
import GetDataById from "../hooks/getDataById";
import BuildPdfByPath from "../hooks/getBuildPdfByPath";
import CheckUrlStatus from "../utils/checkUrlStatus";
import FormatPdfRef from "../utils/formatPdfRef";
import LoadingRing from "../containers/loadingRing";

export default function ResultPage() {
  const location = useLocation();
  console.log("location state:", location.state);
  const { pdfRef } = useParams();
  const formattedPdfRef = FormatPdfRef(pdfRef);
  const possibleUrl = `https://sad.nyc3.digitaloceanspaces.com/${formattedPdfRef.path}.pdf`;

  console.log("formattedPdfRef", formattedPdfRef);

  // do we have data being passed from the previous page?
  if (location.state === null) {
    const paramId = getUrlParam("id");
    // do we have a 'id' url param?
    if (paramId) {
      return <GetDataById paramId={paramId} />;
    } else if (formattedPdfRef) {
      // Try building result from just page URL path
      return (
        <BuildPdfByPath formattedPdfRef={formattedPdfRef} possibleUrl={possibleUrl} />
      )
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

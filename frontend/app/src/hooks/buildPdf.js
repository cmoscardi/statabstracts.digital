import { useLocation } from "react-router-dom";

export default function BuildPdf() {
  const location = useLocation();
  const {url, page, title, id} = location.state
  
  return (
    <>
      <iframe title={title} id={id} src={`${url}#page=${page}`} className="iframe-container"></iframe>
    </>
  );
}


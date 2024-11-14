export default function BuildPdf({url, page, title, id}) {
  return (
    <>
      <iframe title={title} id={id} src={`${url}#page=${page}`} className="iframe-container"></iframe>
    </>
  );
}


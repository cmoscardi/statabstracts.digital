import { useNavigate } from "react-router-dom";
import firstXWords from "../utils/firstXWords";
import RelatedSentences from "../utils/relatedSentences";
import formatTitle from "../utils/formatTitle";

export default function BuildSearchLink({ hit, search }) {
  const title = hit._source.title;
  const { year, part, page } = formatTitle(title, true);
  const formTitle = formatTitle(title);
  const id = hit?._id;
  const resultPage = `/result/${year}-${part}-${page}?id=${id}`;
  const url = hit._source.url;
  const orig_url = hit._source.orig_url;

  const navigate = useNavigate();
  const toResultPage = () => {
    navigate(resultPage, {
      state: {
        url: url,
        orig_url: orig_url,
        id: id,
        page: page,
        title: formTitle,
      },
    });
  };

  return (
    <>
      <a
        onClick={() => {
          toResultPage();
        }}
        href={resultPage}
        className="link-only-hover"
      >
        <div className="flex-row m-3 p-4 rounded bg-dark text-white text-start">
          <div className="h4 pt-1">{formTitle}</div>
          <div className="text-bold pt-1">
            Page Title:
            <div className="text-small">
              {firstXWords(hit._source.contents, 15)}...
            </div>
          </div>
          <div className="py-1 text-bold">
            Related Content:
            <div className="text-small">
              <RelatedSentences str={hit._source.contents} search={search} topN={3} />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

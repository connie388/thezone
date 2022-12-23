import { useLocation } from "react-router-dom";
function PDFreader() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filename = queryParams.get("filename");
  return (
    <div className="pdf-container">
      <span id="label1">
        If you see a blank page in the web browser, you may need to update your
        pdf reader or contact us for a hard copy.
      </span>
      <object
        data={filename}
        width="100%"
        height="725px"
        aria-labelledby="label1"
      />
    </div>
  );
}
export default PDFreader;

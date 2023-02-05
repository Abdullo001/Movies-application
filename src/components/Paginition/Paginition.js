import Pagination from "@mui/material/Pagination";
import "./pagination.scss"

export const PaginitionComponent = ({total, setActivePage}) => {
  return (
    <div className="inner text-light d-flex justify-content-center mb-5">
      <Pagination className="paginition"
        count={total}
        onClick={(evt) => setActivePage(evt.target.innerText)}
        variant="outlined"
        shape="rounded"
        color="primary"
        
      />
    </div>
  );
};

import ReactPaginate from "react-paginate"
import classes from './Pagination.module.css'
const Pagination = () => {

    return <ReactPaginate
        className={classes.root}
        breakLabel="..."
        nextLabel="Далее"
        previousLabel="Назад"
        onPageChange={event => console.log(event)}
        pageRangeDisplayed={9}
        pageCount={3}
        renderOnZeroPageCount={null}
    />
}
export default Pagination;
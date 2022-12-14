import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="flex justify-center items-center">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'p-2  text-green-600 cursor-pointer' : 'p-2 text-grey-600 cursor-pointer'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;
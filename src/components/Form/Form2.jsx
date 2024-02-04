// import React, { useMemo, useState } from 'react'

// const Form2 = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const data = [1, 2, 3, 4];

//   const currentTableData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;

//     return data.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage]);

//   return (
//     <div>
//       {
//         currentTableData.map(item => {
//           return (
//             <h1>{item}</h1>
//           ) 
//         })
//       }
//       <Pagination
//         className="pagination-bar"
//         currentPage={currentPage}
//         totalCount={data.length}
//         pageSize={PageSize}

//         onPageChange={page => setCurrentPage(page)} 
//       />
//     </div>
//   )
// }

// export default Form2
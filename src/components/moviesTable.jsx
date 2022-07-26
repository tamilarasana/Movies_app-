// import React from 'react';
import Like from "./common/like";
import React, { Component } from "react";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  columns = [
    { path: "title", lable: "Title" },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailyRentalRate", lable: "Rate" },
    {key:"like"},
    {key:"delete"}
  ];

  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like Liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

// const MoviesTable = (props) => {
//     const {movies, onDelete, onLike, onSort } = props;
//     return (
//     <table className="table">
//     <thead>
//       <tr>
//         <th onClick={() => onSort("title")}>Title</th>
//         <th onClick={() => onSort("genre.name")}>Genre</th>
//         <th onClick={() => onSort("numberInStock")}>Stock</th>
//         <th onClick ={() => onSort("dailyRentalRate")}>Rate</th>
//         <th></th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {movies.map((movie) => (
//         <tr key={movie._id}>
//           <td>{movie.title}</td>
//           <td>{movie.genre.name}</td>
//           <td>{movie.numberInStock}</td>
//           <td>{movie.dailyRentalRate}</td>
//           <td>
//             <Like
//               Liked={movie.liked}
//               onClick={() => onLike(movie)}
//             />
//           </td>
//           <td>
//             <button
//               onClick={() => onDelete(movie)}
//               className="btn btn-danger btn-sm"
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//    );
// }

export default MoviesTable;

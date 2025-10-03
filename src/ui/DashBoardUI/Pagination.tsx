// src/components/Pagination.jsx

interface PaginationProps{
    currentPage:number;
    numbers:Array<number>;
    changePage:(page:number)=>void;
    prevPage:()=>void;
    nextPage:()=>void;
}

const Pagination:React.FC<PaginationProps> = ({ currentPage, numbers, changePage, prevPage, nextPage }) => (
  <nav className="flex justify-center items-center gap-2 mt-4 flex-wrap">
    <button
      onClick={prevPage}
      disabled={currentPage === 1}
      className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
    >
      Précédent
    </button>
    {numbers.map((item, i) => (
      <button
        key={i}
        onClick={() => changePage(item)}
        className={`px-3 py-1 border rounded hover:bg-gray-100 ${
          currentPage === item ? "bg-blue-600 text-white" : ""
        }`}
      >
        {item}
      </button>
    ))}
    <button
      onClick={nextPage}
      disabled={currentPage === numbers.length}
      className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
    >
      Suivant
    </button>
  </nav>
);

export default Pagination;
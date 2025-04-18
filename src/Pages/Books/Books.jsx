import Book from "../Book/Book";

const Books = ({data}) => {
    return (
        <div>
            <h3 className="font-bold text-4xl text-center py-12 bg-gray-500">Books</h3>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gray-200 py-8 mx-auto ">
        {
          data.map((book)=><Book book={book} key={book.bookId}></Book>)
        }
      </div>
        </div>
    );
};

export default Books;
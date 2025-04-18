import { IoIosStar } from "react-icons/io";
import { Link } from "react-router";
const Book = ({book}) => {
    const {bookId,bookName, author, image,category,tags,rating,yearOfPublishing
,
         } = book;
    console.log(book);
    return (
   <Link to={`/bookDetails/${bookId}`}>
       <div className=" py-3  bg-base-100 rounded-2xl w-[90%] shadow-sm mx-auto border border-gray-500 ">
        <figure className="bg-gray-400 py-2 px-[0px] w-[290px] rounded-2xl mx-auto items-center flex justify-center">
          <img className="rounded-2xl h-[250px] w-[250px]"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ">
         <div className="flex justify-around items-center">
          {
            tags.map(tag=><h1 className="font-bold text-xl">{tag}</h1>)
          }
         </div>
         <div className="flex justify-around items-center">
         <h2 className="card-title text-[10px] cursor-pointer">
         Book Name :  {bookName}
          </h2>
            <div className="text-[10px] cursor-pointer ">author : {author}</div>
         </div>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div>
            <h1>Year of publishing : <span className="btn btn-primary h-8 ml-3"> {yearOfPublishing}</span></h1>
          </div>
          <div className="h-[1px] border border-dotted"></div>
          <div className="card-actions justify-between">
            <div className="badge  ">{category}</div>
            <div className="badge  "><IoIosStar />{rating}</div>
          </div>
        </div>
      </div>
   </Link>
    );
};

export default Book;
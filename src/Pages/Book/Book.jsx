import { IoIosStar } from "react-icons/io";
const Book = ({book}) => {
    const {bookName, author, image,category,tags,rating,
        review} = book;
    console.log(book);
    return (
        <div className="card bg-base-100 w-[90%] shadow-sm mx-auto">
        <figure className="bg-gray-400 py-2 px-[0px] rounded-2xl">
          <img className="rounded-2xl h-[250px] w-[250px]"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ">
         <div className="flex justify-around items-center">
         <h2 className="card-title text-[10px] cursor-pointer">
           {bookName}
          </h2>
            <div className="text-[10px] cursor-pointer ">author : {author}</div>
         </div>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <div className="badge  ">{category}</div>
            <div className="badge  "><IoIosStar />{rating}</div>
          </div>
        </div>
      </div>
    );
};

export default Book;
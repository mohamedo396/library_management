import { Button } from "@/components/ui/button";
import Image from "next/image";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home=()=> (
  <>
    <BookOverview {...sampleBooks[0]}/>
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-8"
    />
  </>
 
  
 
);
export default Home;
 
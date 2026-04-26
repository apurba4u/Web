import { redirect } from "next/navigation";


const default_category_id = '01'

const HomePAge = async() => {
  // HOme page e jokon land korbe tokon by default ek number page er data ta dekhabe
  redirect(`/category/${default_category_id}`)
};

export default HomePAge;


// https://openapi.programming-hero.com/api/news/categories

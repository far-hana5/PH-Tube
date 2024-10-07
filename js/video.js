console.log("video src added");

//created loadCategories
const loadCategories= () =>{
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories) )
    .catch((error) =>console.log(error));

}

//created displayCategories
const displayCategories =(data)=>{
data.forEach((item) => {
    console.log(item);
 const categoryContainer=document.getElementById("categories")
    // create a buttton

    const button =document.createElement("button");
    button.classList="btn";
    button.innerText=item.category;
    // add button to category container
      categoryContainer.append(button);
});
}
loadCategories();
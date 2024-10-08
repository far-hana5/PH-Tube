console.log("video src added");

//created loadCategories
const loadCategories= () =>{
    //fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories) )
    .catch((error) =>console.log(error));

}
// created videoCategories
const videoCategories =() =>{
   //fetch the data
   fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
   .then((res) => res.json())
   .then((data) => displayVideos(data.videos) )
   .catch((error) =>console.log(error)); 
}
const displayVideos=(videos)=>{
console.log(videos);
const videoContainer=document.getElementById("videos");
videos.forEach((video)=>{
    //console.log(video);
    const card=document.createElement("div");
    card.classList="card card-compact"
    card.innerHTML=
    `
    <figure class="h-[250px]">
    <img
      src=${video.thumbnail}
      class="w-full h-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
   <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
   </div>
   <div>
   <h2 class="font-bold">${video.title} </h2>
   <div class="flex items-center gap-2">
    <p >${video.authors[0].profile_name} </p>
    <img class="w-5"  src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" />
   </div>
  
   <p> </p>
   </div>
  </div>
    `;
    videoContainer.appendChild(card);

})
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
videoCategories();
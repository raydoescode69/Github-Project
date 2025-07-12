const searchbtn=document.getElementById('search-button')
const input=document.getElementById('input')
const cardup=document.getElementById('cardup')
const section1=document.getElementById('section1')
const viewprofilebtn =document.getElementById('viewprofilebtn')

let userID=''

searchbtn.addEventListener("click",()=>{
    userID=input.value;
    fetchUsername(userID);
})

viewprofilebtn.addEventListener('click',()=>{
    window.location.href = `https://github.com/${userID}`;
})

async function fetchUsername(userID) {
    let response= await fetch(`https://api.github.com/users/${userID}`);
    let result= await response.json();
    console.log(result);
    
    cardup.innerHTML=` <img src=${result.avatar_url} alt="" class="img" id="avatar">
                <div class="profileInfo">
                    <p>${result.name}</p>
                    <p>${result.bio}</p>
                </div>`
    section1.innerHTML=`<div class="box1">
                        <div><p>Follower</p></div>
                        <div><p>${result.followers}</p></div>
                    </div>
                    <div class="box2">
                        <div><p>Following</p></div>
                        <div><p>${result.following}</p></div>
                    </div>
                    <div class="box3">
                        <div><p>Repo</p></div>
                        <div><p>${result.public_repos}</p></div>
                    </div>`
    viewprofilebtn.style.display = "inline-block";
}

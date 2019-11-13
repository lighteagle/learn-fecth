// Fetch my profile
let mainUrl = "https://api.github.com/users/lighteagle";
fetch(mainUrl)
  .then(response => response.json())
  .then(myProfile => {
    console.log(myProfile);
    console.log(myProfile.avatar_url);

    // console.log(img);
    const fotoProfile = `<img src="${myProfile.avatar_url}" alt="myAvatar">`;
    const detailProfile = `
    <h2>${myProfile.login}</h2>
    <p>${myProfile.name}</p>
    <p>location : ${myProfile.location}</p>
    <p>folowers (${myProfile.followers})</p>
    <p>public repository  (${myProfile.public_repos})</p>
    <p>join since: ${myProfile.created_at}</p>

    
    

    `;
    document.getElementById("avatar").innerHTML = fotoProfile;
    document.getElementById("myProfile").innerHTML = detailProfile;
  });
// Fetch my Followers
let url = "https://api.github.com/users/lighteagle/followers";
fetch(url)
  .then(response => response.json())
  .then(follower => {
    console.log(follower);
    follower.map(data => {
      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `<a href="${data.html_url}"><img src="${data.avatar_url}" alt="" class ='photo'><p>${data.login}</p></a>`;
      document.getElementById("myFollower").append(div);
    });
  });

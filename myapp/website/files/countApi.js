//const countsNumber1 = document.getElementById("returnliked1");
const mysite = "ruipeng.xyz";
const countApiUrl = `https://api.countapi.xyz/hit/${mysite}/visits`;

function likeButtonClicked(countID, key, spanID, button) {
  //   alert("clicked");
  let countsNumberSpan = document.getElementById(countID);
  let countUrl = countApiUrl + key;
  let peopleLikedSpan = document.getElementById(spanID);
  let likeButton = document.getElementById(button);
  fetch(countUrl)
    .then((res) => res.json())
    .then((res) => {
      countsNumberSpan.innerHTML = res.value;
      peopleLikedSpan.style.display = "inline";
      likeButton.src = "./files/likedButton.png";
      likeButton.onclick = "none";
    });
}

//https://api.countapi.xyz/create?namespace=ruipeng&key=a01&value=0
//https://api.countapi.xyz/create?namespace=ruipeng&key=a02&value=0

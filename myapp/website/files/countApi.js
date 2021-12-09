//const countsNumber1 = document.getElementById("returnliked1");
//const countUrl =  'https://api.countapi.xyz/update/ruipeng/a01/?amount=1'


function likeButtonClicked(countID,key,spanID,button){
    let countsNumberSpan = document.getElementById(countID);
    let countUrl = 'https://api.countapi.xyz/update/ruipeng/'+key+'/?amount=1';
    let peopleLikedSpan = document.getElementById(spanID);
    let likeButton = document.getElementById(button)
    fetch(countUrl).then(res => res.json()).then(res => {countsNumberSpan.innerHTML = res.value;
    peopleLikedSpan.style.display = "inline";
    likeButton.src = "./files/likedButton.png"
    likeButton.onclick ='none'})
}

//https://api.countapi.xyz/create?namespace=ruipeng&key=a01&value=0
//https://api.countapi.xyz/create?namespace=ruipeng&key=a02&value=0
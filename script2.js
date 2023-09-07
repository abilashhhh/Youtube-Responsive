// subscribe button

var button = document.getElementById("subscribeButton");
var isSubscribed = false;
button.addEventListener("click", function () {
  isSubscribed = !isSubscribed;

  if (isSubscribed) {
    button.textContent = "Subscribed";
  } else {
    button.textContent = "Subscribe";
  }
});

//like dislike count

var likeButton = document.getElementById("likeButton");
var likeCounts = document.getElementById("likeCount");
var dislikeButton = document.getElementById("dislikeButton");
var dislikeCounts = document.getElementById("dislikeCount");
var isLiked = false;
var isDisliked = false;

likeButton.addEventListener("click", function () {
  if (isLiked) {
    likeCounts.textContent =parseInt(likeCounts.textContent)-1;
    isLiked = false;
  } else {
    likeCounts.textContent = parseInt(likeCounts.textContent)+1; }
 
});

dislikeButton.addEventListener("click", function () {
  if (isDisliked) {
    dislikeCounts.textContent = parseInt(dislikeCount.textContent) - 1;
    isDisliked = false;
  } else {
    dislikeCounts.textContent = parseInt(dislikeCount.textContent) + 1;

  }
});

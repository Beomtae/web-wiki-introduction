document.addEventListener("DOMContentLoaded", () => {
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");
  const submitBtn = document.querySelector(".submit_btn");
  const cancelBtn = document.querySelector(".cancel_btn");

  submitBtn.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    // 댓글 생성
    const commentItem = document.createElement("li");
    commentItem.classList.add("comment_item");
    commentItem.innerHTML = `
    <div class="comment_container">
      <div class="comment_author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div class="comment_content">${commentText}</div>
    </div>
    `;

    commentList.appendChild(commentItem);
    commentInput.value = "";
  });

  // 취소 버튼
  cancelBtn.addEventListener("click", () => {
    commentInput.value = "";
  });
});

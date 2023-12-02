const arrow = document.querySelector('i');
const content =document.getElementById ('content')
arrow.addEventListener("click", () => {
    if (content.style.display === "none") {
        content.style.display = "block";
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add('fa-chevron-up')
        console.log(arrow);

      } else {
        content.style.display = "none";
        arrow.classList.add("fa-chevron-down");
        arrow.classList.remove('fa-chevron-up')
      }
  });
 
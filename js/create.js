function addPost(event) {
    event.preventDefault();
  
    const StudentInput = document.getElementById("NameStudentInfo");
    const InfoInput = document.getElementById("InfoStudentInfo");
  
    const newPost = {
        title: StudentInput.value,
        body: InfoInput.value,
    };
  
    fetch("http://localhost:3000/api/articles/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    })
        .then(() => {
            StudentInput.value = "";
            InfoInput.value = "";
            loadPosts();
            // Показать уведомление toast
            const toast = new bootstrap.Toast(document.getElementById('successToast'));
            toast.show();
        })
        .catch((error) => {
            console.error("Ошибка при добавлении поста:", error);
        });
  }
  
  const postForm = document.getElementById("postForm");
  postForm.addEventListener("submit", addPost);
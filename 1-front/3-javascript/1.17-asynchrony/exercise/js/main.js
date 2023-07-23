let comments = [];

const createComment = async (newComment) => {
    let response = await fetch(
      "https://javascript27g-default-rtdb.firebaseio.com/comments/.json",
      {
        method: "POST",
        body: JSON.stringify(newComment),
      }
    );
    let data = await response.json();
    return data;
  };

  let commentObject = {};

  document.querySelectorAll("#comment-form input").forEach((input) => {
    input.addEventListener("keyup", (event) => {
      let value = event.target.value;
      let property = event.target.name;
      console.log(`${property}:${value}`);
      commentObject[property] = value;
      console.log(commentObject);
    });
  });
  
  const resetForm = (formId) => {
    let fields = document.querySelectorAll(`#${formId} input`);
    fields.forEach((field) => (field.value = ""));
  };
  
  document.getElementById("save-comment").addEventListener("click", () => {
    comment = { ...commentObject, id: new Date().getTime() };
    createComment(comment)
        .then(()=> {
            resetForm("comment-form");
            commentObject = {};
            printAllComments();
        })
        .catch((reason) => console.log("Message:" + reason.message));
  });

  const deleteComment = async (id) => {
    console.log(id)
    let response = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/comments/${id}`,
      {
        method: "DELETE"
      }
    );
    return await response.json();
  };


// Print comments
  const createCommentBox = (commentData) => {
    let { author, comment, id } = commentData;
    let card = document.createElement("div");
    card.classList.add("card");
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Borrar comentario";
  
    deleteButton.addEventListener("click", () => {
      let comment = comments.filter((comment) => comment.id !== id);
      deleteComment(comment)
        .then(() => {
            printAllComments();
        })
        .catch((reason) => console.log("Message:" + reason.message));
    });
  
    let cardText = document.createTextNode(`${author} : ${comment}`);
  
    cardBody.append(cardText, deleteButton);
    card.append(cardBody);
  
    return card;
  };

  const getAllComments = async () => {
    let response = await fetch(
      "https://javascript27g-default-rtdb.firebaseio.com/comments/.json",
      {
        method: "GET"
      }
    );
    let data = await response.json();
    return data;
  };
  
  const printAllComments = () => {
    let wrapper = document.getElementById("comment-wrapper");
    wrapper.innerHTML = "";
    getAllComments()
        .then((commentsArray) => {
            // for(id in commentsArray) {
            //     comment = commentsArray[id];
            //     let commentBox = createCommentBox(comment);
            //     wrapper.append(commentBox);
            // }
            const ids = Object.keys(commentsArray);
            ids.forEach((id) => {
                comment = commentsArray[id];
                let commentBox = createCommentBox(comment);
                wrapper.append(commentBox);
            });
        })
        .catch((reason) => console.log("Message:" + reason.message));
  };
  
  printAllComments();



//   let response = await fetch(
//     "https://javascript27g-default-rtdb.firebaseio.com/comments/.json",
//   );
//   let data = await response.json();
//   return data;



//   const printAllComments1 = (commentsArray) => {
//     let wrapper = document.getElementById("comment-wrapper");
//     wrapper.innerHTML = "";
  
//     commentsArray.forEach((comment) => {
//       let commentBox = createCommentBox(comment);
//       wrapper.append(commentBox);
//     });
//   };
  
//   printAllComments1(comments);

//   const printAllComments = async (newComment) => {
//     let response = await fetch(
//       "https://javascript27g-default-rtdb.firebaseio.com/comments/.json",
//       {
//         method: "GET",
//         body: JSON.stringify(newComment),
//       }
//     );
//     let data = await response.json();
//     return data;
//   };

//   printAllComments(comments);

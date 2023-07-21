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
    comments = [...comments, { ...commentObject, id: new Date().getTime() }];
    console.log(comments);
    createComment(comments);
    resetForm("comment-form");
    commentObject = {};
  });

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
$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var customername = $("#customername");
  var authorContainer = $(".customer-container");
  

  // Adding an event listener for when the form is submitted
  $(document).on("submit", "#customerform", handleCustomerFormSubmit);
  
  // A function to handle what happens when the form is submitted to create a new Customer
  function handleCustomerFormSubmit(event) {
    event.preventDefault();

    alert("Yeee Harrrrrrrrrrr");
    // Don't do anything if the name fields hasn't been filled out
    if (!customername.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    insertCustomer({
      customername: customername.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function insertCustomer(customerData) {
    $.post("/api/customer", customerData)
      .then(getCustomers);
  }




    // Constructing a customer object to hand to the database


    // var newPost = {
    //   title: titleInput
    //     .val()
    //     .trim(),
    //   body: bodyInput
    //     .val()
    //     .trim(),
    //   AuthorId: authorSelect.val()
    // };

    // // If we're updating a post run updatePost to update a post
    // // Otherwise run submitPost to create a whole new post
    // if (updating) {
    //   newPost.id = postId;
    //   updatePost(newPost);
    // }
    // else {
    //   submitPost(newPost);
    // }



  }

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/blog";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "post":
        queryUrl = "/api/posts/" + id;
        break;
      case "author":
        queryUrl = "/api/authors/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AuthorId || data.id);
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Authors and then render our list of Authors
  function getCustomers() {
    $.get("/api/customers", renderCustomerList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderCustomerList(data) {
    if (!data.length) {
      window.location.href = "/addCustomer";
    }

    console.log("WOOHOO");
    // $(".hidden").removeClass("hidden");
    // var rowsToAdd = [];
    // for (var i = 0; i < data.length; i++) {
    //   rowsToAdd.push(createAuthorRow(data[i]));
    // }
    // authorSelect.empty();
    // console.log(rowsToAdd);
    // console.log(authorSelect);
    // authorSelect.append(rowsToAdd);
    // authorSelect.val(authorId);
  }

  
  
});

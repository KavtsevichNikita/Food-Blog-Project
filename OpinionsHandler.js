// opinions-handler.js

class OpinionsHandler {
  constructor(formDataArray, containerId) {
    this.formDataArray = formDataArray || [];
    this.formDataContainer = document.getElementById(containerId);
  }

  renderReview(formData) {
    return `
        <div class="cart_of_review" data-category="${formData.foodRatingValue}" data-name="${formData.name}">
            <p class="name">${formData.name}</p>
            <img class="person_img" src="${formData.url}" alt="Person">
            <div class="final_review">${formData.message}</div>
            <p class="name">${formData.foodRatingValue}</p>
            <hr>
            <p class="name">Posted: ${formData.created}</p>
        </div>
      `;
  }

  renderOpinions() {
    this.formDataContainer.innerHTML = "";
    this.formDataArray.forEach((formData) => {
      this.formDataContainer.innerHTML += this.renderReview(formData);
    });
  }

  filterReviews(category) {
    const reviewCards = document.querySelectorAll(".cart_of_review");
    reviewCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      card.style.display =
        category === "All" || category === cardCategory ? "block" : "none";
    });
  }

  searchReviews(searchTerm) {
    const reviewCards = document.querySelectorAll(".cart_of_review");
    let found = false;

    reviewCards.forEach((card) => {
      const cardName = card.getAttribute("data-name").toLowerCase();
      card.style.display = cardName.includes(searchTerm) ? "block" : "none";
      if (card.style.display === "block") found = true;
    });

    if (!found) {
      this.formDataContainer.innerHTML = "<p>No data found.</p>";
    } else {
      this.renderOpinions();
    }
  }
}

// // Example usage
// document.addEventListener("DOMContentLoaded", function () {
//   const formDataArray = JSON.parse(localStorage.getItem("formDataArray"));
//   const opinionsHandler = new OpinionsHandler(formDataArray, "form-data");

//   if (formDataArray) {
//     opinionsHandler.renderOpinions();
//   }

//   const filterButtons = document.querySelectorAll(".button_filter_reviews");
//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const category = button.getAttribute("data-filter");
//       opinionsHandler.filterReviews(category);
//     });
//   });

//   const searchBar = document.getElementById("searchBar");
//   searchBar.addEventListener("input", () => {
//     const searchTerm = searchBar.value.toLowerCase();
//     opinionsHandler.searchReviews(searchTerm);
//   });
// });

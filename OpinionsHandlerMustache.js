import Mustache from "./mustache.js";

export default class OpinionsHandlerMustache{

    /**
     * constructor
     * @param opinionsFormElmId - id of a form element where a new visitor opinion is entered
     * @param opinionsListElmId - id of a html element to which the list of visitor opinions is rendered
     * @param templateElmId - id of a html element with the mustache template
     */
    constructor(opinionsFormElmId, opinionsListElmId,templateElmId) { //("opnFrm","opinionsContainer","mTmplOneOpinion")
        //get the template:
        this.mustacheTemplate=document.getElementById(templateElmId).innerHTML;
    }

    /**
     * creates html code for one opinion using a mustache template
     * @param opinion - object with the opinion
     * @returns {string} - html code with the opinion
     */
    opinion2html(opinion){
        //in the case of Mustache, we must prepare data beforehand:
        opinion.createdDate=(new Date(opinion.created)).toDateString();

        //use the Mustache:
        const htmlWOp = Mustache.render(this.mustacheTemplate,opinion);

        //delete the createdDate item as we created it only for the template rendering:
        delete(opinion.createdDate);

        //return the rendered HTML:
        return htmlWOp;
    }
}







// import OpinionsHandler from "./OpinionsHandler.js"
// import Mustache from "./mustache.js";


// export default class OpinionsHandlerMustache extends OpinionsHandler {
//   constructor(formDataArray, containerId) {
//     super(formDataArray, containerId);
//     this.formDataArray = formDataArray || [];
//     this.formDataContainer = document.getElementById(containerId);
//   }

//   renderReview(formData) {

//     const template = `
//         <div class="cart_of_review" data-category="{{{foodRatingValue}}}" data-name="{{{name}}}">
//             <p class="name">{{{name}}}</p>
//             <img class="person_img" src="{{{url}}}" alt="Person">
//             <div class="final_review">{{{message}}}</div>
//             <p class="name">{{{foodRatingValue}}}</p>
//             <hr>
//             <p class="name">Posted: {{{created}}}</p>
//         </div>
//       `;

//     return Mustache.render(template, formData);
//   }

//   renderOpinions() {
//     this.formDataContainer.innerHTML = "";
//     const fragment = document.createDocumentFragment();

//     this.formDataArray.forEach((formData) => {
//       const review = this.renderReview(formData);
//       const div = document.createElement("div");
//       div.innerHTML = review;
//       fragment.appendChild(div.firstChild);
//     });

//     this.formDataContainer.appendChild(fragment);
//   }

//   filterReviews(category) {
//     const reviewCards = document.querySelectorAll(".cart_of_review");
//     reviewCards.forEach((card) => {
//       const cardCategory = card.getAttribute("data-category");
//       card.style.display =
//         category === "All" || category === cardCategory ? "block" : "none";
//     });
//   }

//   searchReviews(searchTerm) {
//     const reviewCards = document.querySelectorAll(".cart_of_review");
//     let found = false;

//     reviewCards.forEach((card) => {
//       const cardName = card.getAttribute("data-name").toLowerCase();
//       card.style.display = cardName.includes(searchTerm) ? "block" : "none";
//       if (card.style.display === "block") found = true;
//     });

//     if (!found) {
//       this.formDataContainer.innerHTML = "<p>No data found.</p>";
//     } else {
//       this.renderOpinions();
//     }
//   }
// }















// // import mustache from './mustache.js';

// // export default class OpinionsHandlerMustach {
// //   constructor(formDataArray, containerId) {
// //     this.formDataArray = formDataArray || [];
// //     this.formDataContainer = document.getElementById(containerId);
// //   }

// //   renderReview(formData) {

// //     const template = `
// //         <div class="cart_of_review" data-category="{{foodRatingValue}}" data-name="{{name}}">
// //             <p class="name">{{name}}</p>
// //             <img class="person_img" src="{{url}}" alt="Person">
// //             <div class="final_review">{{message}}</div>
// //             <p class="name">{{foodRatingValue}}</p>
// //             <hr>
// //             <p class="name">Posted: {{created}}</p>
// //         </div>
// //       `;

// //     return mustache.render(template, formData);
// //   }

// //   renderOpinions() {
// //     this.formDataContainer.innerHTML = "";
// //     this.formDataArray.forEach((formData) => {
// //       this.formDataContainer.innerHTML += this.renderReview(formData);
// //     });
// //   }

// //   filterReviews(category) {
// //     const reviewCards = document.querySelectorAll(".cart_of_review");
// //     reviewCards.forEach((card) => {
// //       const cardCategory = card.getAttribute("data-category");
// //       card.style.display =
// //         category === "All" || category === cardCategory ? "block" : "none";
// //     });
// //   }

// //   searchReviews(searchTerm) {
// //     const reviewCards = document.querySelectorAll(".cart_of_review");
// //     let found = false;

// //     reviewCards.forEach((card) => {
// //       const cardName = card.getAttribute("data-name").toLowerCase();
// //       card.style.display = cardName.includes(searchTerm) ? "block" : "none";
// //       if (card.style.display === "block") found = true;
// //     });

// //     if (!found) {
// //       this.formDataContainer.innerHTML = "<p>No data found.</p>";
// //     } else {
// //       this.renderOpinions();
// //     }
// //   }
// // }

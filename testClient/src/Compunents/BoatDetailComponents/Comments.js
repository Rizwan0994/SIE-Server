import React from 'react'
import owner from '../../images/owner1.svg'

function Comments({comments}) {

      const formatDate2 = (dateString) => {
        const options = { year: "numeric", month: "short" };
        return new Date(dateString).toLocaleDateString(undefined, options);
      };

        const renderStars = (rating) => {
          const starCount = Math.round(rating); // Round the rating to the nearest integer to get the number of stars

          // Generate an array of star icons based on the starCount
          const stars = Array.from({ length: starCount }, (_, index) => (
            <span key={index}>&#9733;</span>
          ));

          return stars;
        };
 const commentsLength = comments.length;

  return (
    <div>
      <span
        style={{
          fontSize: "12px",
          fontWeight: "700",
          fontFamily: "Open Sans",
        }}
      >
        {commentsLength} {commentsLength === 1 ? "comment" : "comments"}
      </span>
      <div class="card shadow-sm border-0 mt-3 mb-3">
        {comments.map((comment, index) => (
          <div class="card-body">
            <div class="d-flex align-items-center">
              <img
                src={owner}
                width="10%"
                class="rounded-circle avatar"
                alt="Avatar"
              />
              <div class="ms-3 d-flex ml-3">
                <h6 class="card-title">{comment.username}</h6>
                <p class="card-text" style={{ marginLeft: "10px" }}>
                  {" "}
                  {formatDate2(comment.date)}
                </p>
              </div>
              <div class="ms-auto">
                <span class="star-icon text-primary">
                  {renderStars(comment.average_rating)}
                </span>
              </div>
            </div>
            <p class="card-text">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments
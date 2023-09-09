import ReactStars from "react-rating-stars-component";

function UserReview() {

  const rating = {
    size: 30,
    value: 4.5,
    edit: false,
  };
  return (
    <div className="d-flex userReview border-bottom">
      <div>
        <img src="./User-avatar.png" alt="" className="rounded-circle me-2 userReviewImg"/>
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex userReviewName">
          <p className="userReviewTextName">User Name</p>
          <p className="userReviewTextVerified">Verified Buyer</p>
          <p className="ms-auto userReviewTextVerified">Date</p>
        </div>
        <ReactStars {...rating} />
        <p className="userReviewTextTitle">Review Titlte</p>
        <p className="userReviewTextContent">Review Content...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente quibusdam tenetur? Facilis in tempora obcaecati sint similique, rerum quasi placeat a blanditiis voluptatibus nostrum iusto rem cupiditate sequi quod explicabo animi quis omnis repellat quo? Provident perferendis eveniet voluptatem inventore consequatur aliquid delectus corporis.</p>
        <div className="d-flex">
            <img src="./icons8-share.svg" alt="" className="userReviewIcon"/>
            <p className="userReviewTextShare">Share    |</p>
            <div className="d-flex userReviewTextShare ms-auto">
                <p className="me-2">Was This Review Helpful?</p>
                <i class="bi bi-hand-thumbs-up-fill me-2"></i>
                <p className="me-2">likes count</p>
                <i class="bi bi-hand-thumbs-down-fill me-2"></i>
                <p>unlike count</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default UserReview;

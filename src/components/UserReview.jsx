import ReactStars from "react-rating-stars-component";
import UserAvatar from "/User-avatar.png?url";
import iconShare from "/icons8-share.svg?url";

function UserReview() {

  const rating = {
    size: 30,
    value: 4.5,
    edit: false,
  };
  return (
    <div className="card d-flex flex-column userReview p-3 m-3 mb-5">
      <div className="d-flex align-items-center">
        <img src={UserAvatar} alt="" className="rounded-circle me-2 userReviewImg"/>
        <div className="d-flex justift-content-start w-100">
          <p className="userReviewTextName">User Name</p>
          <p className="ms-auto userReviewTextVerified">Date</p>
        </div>
      </div>
      <div>
      <ReactStars {...rating} />
        <p className="userReviewTextTitle">Review Titlte</p>
        <p className="userReviewTextContent">Review Content...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sapiente quibusdam tenetur? Facilis in tempora obcaecati sint similique, rerum quasi placeat a blanditiis voluptatibus nostrum iusto rem cupiditate sequi quod explicabo animi quis omnis repellat quo? Provident perferendis eveniet voluptatem inventore consequatur aliquid delectus corporis.</p>
        <div className="d-flex">
            <img src={iconShare} alt="" className="userReviewIcon"/>
            <div className="d-flex userReviewTextShare ms-auto">
                <i className="bi bi-hand-thumbs-up-fill me-2"></i>
                <p className="me-2">likes count</p>
                <i className="bi bi-hand-thumbs-down-fill me-2"></i>
                <p>unlike count</p>
            </div>
        </div>
      </div>
      </div>
  );
}

export default UserReview;

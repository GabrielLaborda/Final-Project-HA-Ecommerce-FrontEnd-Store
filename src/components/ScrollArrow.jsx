import "./ScrollArrow.css"

function ScrollArrow({colour, mRight}) {

    return <i  style={{color:colour}} className={`bi bi-arrow-down arrowMoving bounce ${mRight}`}></i>
}

export default ScrollArrow;
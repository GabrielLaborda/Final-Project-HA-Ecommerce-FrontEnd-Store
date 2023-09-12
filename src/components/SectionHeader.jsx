import './SectionHeader.css';

function SectionHeader({ bold, normal }) {
  return (
    <div className="col-12 col-md-4">
      <div className="h-100 w-100 d-flex align-items-center ms-5 ps-2">
        <div className="w-75">
          <p className="section-header">
            <span id="bold">{bold} </span>
            {normal}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;

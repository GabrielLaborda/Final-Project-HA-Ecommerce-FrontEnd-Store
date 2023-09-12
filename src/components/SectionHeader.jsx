import './SectionHeader.css';

function SectionHeader({ bold, normal }) {
  return (
    <div className="col-2 col-md-4">
      <div className="h-100 w-100 d-flex align-items-center justify-content-center">
        <div className="w-50">
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

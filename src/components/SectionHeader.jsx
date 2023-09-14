import './SectionHeader.css';

function SectionHeader({ bold, normal }) {
  return (
    <div className="col-12 col-md-4">
      <div className="h-100 w-100 d-flex align-items-center">
        <div className="w-100">
          <p className="section-header">
            <span id="bold">{bold} <br></br>
            </span>{normal}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;

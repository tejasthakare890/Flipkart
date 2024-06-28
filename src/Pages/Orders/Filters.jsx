import React from 'react';
import './Filter.css'


function Filters() {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div>
        <strong>ORDER STATUS</strong>
        <div><input type="checkbox" /> On the way</div>
        <div><input type="checkbox" /> Delivered</div>
        <div><input type="checkbox" /> Cancelled</div>
        <div><input type="checkbox" /> Returned</div>
      </div>
      <div>
        <strong>ORDER TIME</strong>
        <div><input type="checkbox" /> Last 30 days</div>
        <div><input type="checkbox" /> 2023</div>
        <div><input type="checkbox" /> 2022</div>
        <div><input type="checkbox" /> 2021</div>
        <div><input type="checkbox" /> 2020</div>
        <div><input type="checkbox" /> Older</div>
      </div>
    </div>
  );
}

export default Filters;
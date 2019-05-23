import React, { Fragment } from 'react';
import './style.css';

const Weight = props => (
  <Fragment>
    <div className="row">
      <div className="col">
        <div className="currentWeight">{props.currentWeight}</div>
        <div className="currentText">CURRENT WEIGHT</div>
      </div>
      <div className="col">
        <form onSubmit={props.handleWeightSubmit}>
          <div className="form-group">
            <label className="my-1 mr-2" htmlFor="weight">
              Log Weight (lbs)
            </label>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="weight"
                onChange={props.handleChange}
                value={props.weight}
              />
              <div className="input-group-append">
                <button className="btn btn-danger weightlog" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="row rowHeader">
      <div className="col headerWeight">Weight</div>
      <div className="col headerDate">Date</div>
    </div>

    <div className="row">
      {props.previousWeights.map(record => (
        <div key={record.id} className="row rowBody">
          <div className="col colWeight">{record.weight}</div>
          <div className="col colDate">{record.updatedAt.slice(0, 10)}</div>
        </div>
      ))}
    </div>
  </Fragment>
);

export default Weight;

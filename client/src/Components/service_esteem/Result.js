import '../../css/result.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEsteem } from '../../action/esteemAction';

const Result = () => {
  const dispatch = useDispatch();
  const userEsteem = useSelector((state) => state.auth.userEsteem);
  let xPanels;
  let nPower;
  let length;
  let width;
  let nPanelRow;
  let esteemPanel;
  let esteemPower;
  let cost;
  if (userEsteem) {
    let { annualElecConsum, roofDimentionL, roofDimentionW } = userEsteem;
    xPanels = Math.round(parseInt(annualElecConsum) / 1600 / 0.375);
    nPower = xPanels * 0.375;
    length = Math.max(parseInt(roofDimentionL), parseInt(roofDimentionW));
    width = Math.min(parseInt(roofDimentionL), parseInt(roofDimentionW));
    nPanelRow = length - 1;
    esteemPanel = Math.round((width / 1.6) * nPanelRow);
    esteemPower = esteemPanel * 0.375;
    cost = xPanels * 700 + 4000;
    console.log(cost);
  }

  // if (userEsteem) {
  //   let lastE = userEsteem.length - 1;
  //   console.log(userEsteem[lastE]);
  // }
  // userEsteem.map((esteem, index) => {
  //     let date = new Date(esteem.CreatedAt);
  //     let seconds = date.getTime();
  //     console.log(seconds);
  //     console.log(index);
  // })
  return (
    <div className='resultPage'>
      <h3>esteem</h3>
      <p>
        Based on your yearly consumption you can install <span>{xPanels}</span> modules
        with a total nominal power of <span>{nPower} Kwp</span>
      </p>
      <p>
        You can generate a total of <span>{nPower * 1.6} Kwp</span> Kwh yearly
      </p>
      <p>
        Your roof can contain up to <span>{esteemPanel}</span> modules with a nominal
        power of <span>{esteemPower}</span> kwp
      </p>
      <p>
        The total cost of the installation will cost : ~<span>{cost}DT</span>
      </p>
    </div>
  );
};

export default Result;

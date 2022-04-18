import React from 'react';
import { GlobalVariable } from '../../../UtilityClass/ApiConnectionClass';

const FooterPayments = () => {
    const rootUrl = GlobalVariable.LOCAL_WEB_URL;
  return (
    <div className="w3_footer_grid_bottom">
        <h4>100% secure payments</h4>
        <img src={`${rootUrl}assets/images/card.png`} alt=" " className="img-responsive" />
    </div>
  )
}

export default FooterPayments
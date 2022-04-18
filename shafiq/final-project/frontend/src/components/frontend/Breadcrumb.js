import React from 'react';

const Breadcrumb = (props) => {
    const {title, name, path} = props;
  return (
    <div className="products-breadcrumb">
		<div className="container">
			<ul>
				<li><i className="fa fa-home"></i><a href='#'>{title}</a><span>|</span></li>
				<li>{name}</li>
			</ul>
		</div>
	</div>
  )
}

export default Breadcrumb
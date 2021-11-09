import React from 'react'
import '../style/MyPage.css'

function MyPage() {
	return (
		<div className='landing-page'>
			<div className="logo-container">
				<div className="left-part">
					<div className="stick left top-small-stick"></div>
					<div className="stick left bottom-small-stick"></div>
				</div>
				<div className="right-part">
					<div className="stick right top-small-stick"></div>
					<div className="stick right bottom-small-stick"></div>
				</div>
				<div className="stick right-t-stick"></div>
				<div className="stick left-t-stick"></div>
				<div className="stick main-stick"></div>
			</div>
		</div>
	)
}

export default MyPage

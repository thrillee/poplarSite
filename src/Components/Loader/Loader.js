// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import './Loader.css'

// class Loader extends Component {
//   state = {};
//   render() {
//     const { loading } = this.props.loading;
//     if (!loading) return null;

//     return (
//       <div className="loading-container">
//         <div className="loading">
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({ loading: state.loading });

// export default connect(mapStateToProps)(Loader);

import React, { useState, useEffect } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, connect } from 'react-redux';
import { hideLoader } from '../../_actions/loading';
import { hideModal } from '../../_actions/modal';
import { withRouter } from 'react-router-dom';

const SuspenseLoading = (props) => {
	const loading = useSelector((state) => state.loading.loading);
	const user = useSelector((state) => state.authUser.isAuthenticated);

	console.log(loading);

	useEffect(() => {
		if (!loading) return null;
		if (user === true) {
			props.hideLoader();
		}
	});

	return (
		<>
			<AnimatePresence>
				{loading && (
					<motion.div
						key='loading'
						initial={{ opacity: 0 }}
						animate={{ opacity: 5 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.3 }}
					>
						<div className='d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3'>
							<div className='d-flex align-items-center flex-column px-4'>
								<ClimbingBoxLoader color={'#3c44b1'} loading={true} />
							</div>
							<div className='text-muted font-size-xl text-dark text-center pt-3'>
								<span className='font-size-lg d-block text-dark'>
									Your request is loading
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default withRouter(
	connect(null, { hideLoader, hideModal })(SuspenseLoading)
);

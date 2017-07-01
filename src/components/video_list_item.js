import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li className="list-group-item" onClick={ () => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
<<<<<<< HEAD
					<img alt="" className="media-object" src={imageUrl}/>
=======
					<img className="media-object" src={imageUrl}/>
>>>>>>> 6f03654500e990d1d105ec3d132a4c11a2deb237
				</div>	

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
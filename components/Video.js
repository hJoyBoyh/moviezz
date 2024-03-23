/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useCallback, useState } from 'react';

import {
	View,
} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';



export function Video({ videoKey }) {
	const [playing, setPlaying] = useState(false)
	const onStateChange = useCallback(state => {
		if (state === 'ended') {
			setPlaying(false)
		}
	}, [])
	return (
		<View >
			<YoutubeIframe
				height={300}
				width={410}
				play={playing}
				videoId={videoKey}
				onChangeState={onStateChange}
			/>
		</View>

	)
}


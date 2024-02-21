import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import { getFeedsAPI } from "../network/ApiHook";



  type FeedProps = {title : string, imageUrl : string, feedImage : string, likeCount : string};

  const Feed = ({title, imageUrl, feedImage, likeCount} : FeedProps) => (
	<View style = {styles.feedItem}>
		<View style = {styles.feedHeader}>
			<Image
				style={styles.profilePicture}
				source={{uri : imageUrl}}
			/>
			<Text style={styles.name}>{title}</Text>
		</View>
		<Image 
			style = {styles.feedImage}
			source = {{uri : feedImage}}
		/>
		<View style = {styles.feedFooter}>
			<Image
				style={styles.icons}
				source={require('../assets/heart.png')}
			/>
			<Image
				style={styles.icons}
				source={require('../assets/chat.png')}
			/>
			<Image
				style={styles.icons}
				source={require('../assets/send.png')}
			/>
			<Text style={styles.likesCount}>Liked by {likeCount} others</Text>
		</View>
	</View>
);


const FeedComponent = () => {

	const [feedList, setFeedList] = useState<any[]>([]);

	useEffect(() => {
		// console.log('effect activated');
		const getFeeds = async () => {
		try {
			const {contentResp, errorMessage} = await getFeedsAPI(
			'v1/a2608b7c-9e93-4233-b8d5-fd5e0995a243',
			);
			setFeedList(contentResp);
			// console.log(feedList[0].feedImage);
		} catch (error) {
			console.error('Error:', error);
		}
		};
		getFeeds();
	}, []);

	return (
		<View>
			<FlatList
			showsHorizontalScrollIndicator={false}
			data={feedList}
			renderItem={({item}) => <Feed title={item.title} imageUrl={item.imageUrl} feedImage={item.feedImage} likeCount={item.likeCount} />}
			keyExtractor={item => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	feedItem : {
		flexDirection : 'column',
	},
	feedHeader : {
		flexDirection : 'row',
		paddingBottom : 10,
		paddingTop : 10,
		marginBottom : 5,
	},
	profilePicture : {
		width : 40,
		height : 40,
		borderRadius : 20,
		marginLeft : 10,
		marginRight : 10,
	},
	name : {
		paddingTop : 10,
		fontSize : 14,
		color : 'black',
	},
	feedImage : {
		height : 250,
		marginBottom : 10,
	},
	feedFooter : {
		flexDirection : 'row'
	},
	icons : {
		width : 25,
		height : 25,
		margin : 6,
	},
	likesCount : {
		paddingTop : 8,
		paddingLeft : 10,
		color : 'black',
		fontSize : 15,
	},
});

export default FeedComponent;


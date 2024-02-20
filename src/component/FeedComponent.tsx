import React from "react";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";

const feeds = [
    {
		id: '1', feedImage: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
		, likeCount: '1000', title: 'Your Story', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
    },
    {
		id: '2', feedImage: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
		, likeCount: '2200', title: 'Hari Lee', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
    },
    {
		id: '3', feedImage: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
		, likeCount: '550', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
    },
    {
		id: '6', feedImage: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
		, likeCount: '2200', title: 'Hari Lee', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
    },
    {
		id: '4', feedImage: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
		, likeCount: '550', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg'
    },
    {
		id: '5', feedImage: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
		, likeCount: '1000', title: 'Ross', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
    },
    {
		id: '7', feedImage: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg'
		, likeCount: '2200', title: 'Hari Lee', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png'
    },

    // Add more feeds here
  ];

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
	return (
		<View>
			<FlatList
			showsHorizontalScrollIndicator={false}
			data={feeds}
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


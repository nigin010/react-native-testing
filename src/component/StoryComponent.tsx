import React from "react";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";

//Pink border for circle
const stories = [
  { id: '1', title: 'Your Story', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png' },
  { id: '2', title: 'Hari Lee', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
  { id: '3', title: 'Joey', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
  { id: '6', title: 'Changler Bing', imageUrl: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg' },
  { id: '4', title: 'Monica Geller', imageUrl: 'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg' },
  { id: '5', title: 'Ross', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png' },
  { id: '7', title: 'Rach', imageUrl: 'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png' },
];

type StoryProps = { title: string, imageUrl: string };

const Story = ({ title, imageUrl }: StoryProps) => (
  <View style={styles.item}>
    <Image
      style={styles.profileLogo}
      source={{ uri: imageUrl }} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const StoryComponent = () => {
  return (
    <View>
		<Text style={styles.storiesCaption}>Stories</Text>
		<FlatList 
		horizontal={true}
		showsHorizontalScrollIndicator={false}
		data={stories}
		renderItem={({ item }) => <Story title={item.title} imageUrl={item.imageUrl} />}
		keyExtractor={item => item.id}
		/>
    </View>
  );
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingEnd: 1,
		width : 80,
	},
	profileLogo: {
		width: 55,
		height: 55,
		borderRadius: 27.5,
		borderWidth: 2,
		borderColor: 'purple',
	},
	title: {
		fontSize: 16,
		textAlign: 'center',
	},
	storiesCaption: {
		padding: 10,
		color: 'black',
	}
});

export default StoryComponent;

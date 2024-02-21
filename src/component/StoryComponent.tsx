import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, Image, Text } from "react-native";
import { getFeedsAPI } from "../network/ApiHook";
//Pink border for circle

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

	const [StoryList, setStoryList] = useState<any[]>([]);

	useEffect(() => {
		const getStories = async() => {
			try {
				const {contentResp, errorMessage} = await getFeedsAPI('v1/e4cf6dd8-ac8c-472c-bcf0-62adf77b1f2a',);
				setStoryList(contentResp);
			} catch(error) {
				console.error('Error',error);
			}
		};
		getStories();
	}, []);
  return (
    <View>
		<Text style={styles.storiesCaption}>Stories</Text>
		<FlatList 
		horizontal={true}
		showsHorizontalScrollIndicator={false}
		data={StoryList}
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

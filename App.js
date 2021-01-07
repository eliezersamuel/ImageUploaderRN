import React from 'react';
import styled from 'styled-components/native';
import {SafeAreaView, ScrollView, useWindowDimensions} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import api from './src/services/api';

const App = () => {
	const width = useWindowDimensions().width | 0;
	const height = useWindowDimensions().height | 0;

	async function enviarImagem() {
		const res = await DocumentPicker.pick({
			type: [DocumentPicker.types.images],
		});

		const data = new FormData();
		data.append('file', res);

		try {
			await api.post('/posts', data);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<Container width={width} height={height}>
					<Texto>Ola Tudo bem! Clique abaixo para enviar!</Texto>
					<Button onPress={() => enviarImagem()}>
						<Label>Clique aqui!</Label>
					</Button>
				</Container>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;

const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.width + 'px'};
	height: ${(props) => props.height + 'px'};
	background: #123;
`;

const Texto = styled.Text`
	color: #cecece;
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
	padding: 15px 80px;
	background: #cecece;
	box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.4);
`;

const Label = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #123;
	text-transform: uppercase;
`;

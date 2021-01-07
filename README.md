# Aplicativo para envio de imagem para backend

## Projeto

Projeto criado para auxilio em React Native no envio de Imagens, ou até mesmo outros arquivos.

## Dependências

```
versões utilizadas dos pacotes:
    axios: 0.21.1,
    react: 16.13.1,
    react-native: 0.63.4,
    react-native-document-picker: 4.2.0,
    styled-components: 5.2.1
```

## Arquivos importantes

-   src/services/api.js

```javascript
import axios from 'axios';

const api = axios.create({
    /* tem que ser 10.0.2.2 para localhost no react native */,
    baseURL: `http://10.0.2.2:3001`
});

export default api;
```

-   App.js

```javascript
//Função responsável por enviar carregar a imagem e enviar
async function enviarImagem() {
	//usa o document picker para selecionar uma imagem
	const res = await DocumentPicker.pick({
		type: [DocumentPicker.types.images],
	});
	//cria um FormData e coloca a imagem em data
	const data = new FormData();
	data.append('file', res);

	//faz o envio da imagem para a rota post via requisição post
	try {
		await api.post('/posts', data);
	} catch (error) {
		console.error(error);
	}
}
```

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tvprogram: [],
			pelis:[],
			personas:[],
			favoritos:[]
		},
		actions: {
			// Usa getActions para llamar una function dentro de una fuction. Te dejo un ejemplo
			exampleFunction: () => {
				getActions().changeColor("green");
			},
            //funcion de ejemplo para hacer peticiones fetch
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ demo: data.bar }))
				*/
			},

			obtenerpeliculas: () => {
			
			fetch('https://api.themoviedb.org/3/movie/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
			.then(response=>response.json())
			.then(data=>setStore({pelis:data.results}));
			},


			obtenerpersonas: () => {
			
				fetch('https://api.themoviedb.org/3/person/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
				.then(response=>response.json())
				.then(data=>setStore({personas:data.results}));
				},
		   
	     	obtenertvprogramas: () => {
			
			fetch('https://api.themoviedb.org/3/tv/popular?api_key=b1f1f4bc0e9a9970ff6e005e582871ec')
			.then(response=>response.json())
			.then(data=>setStore({tvprogram:data.results}));
			},

			
		



			changeColor: (color) => {
                //actualiza un dato de la global store
                setStore({ demo: color });
                
				//Para obtener datos de la store y usarlos como en el ejemplo de la linea 23 a la 26
				// const store = getStore();

				//suponiendo que demo es un array con datos  
				//con colores predefinidos
				// const demo = store.demo.map((elm, i) => {
				// 	if (i === index) elm = color;
				// 	return elm;
				// });

			}
		}
	};
};

export default getState;
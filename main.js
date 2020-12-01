/* 
Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
L'api ci restituirà decina di dischi musicali che dovremo mostrare all'utente utilizzando Vue.
Creare una select con i seguenti generi: pop, rock, metal e jazz.
Mostra elementi in base al genere
*/

const app = new Vue({
	el:"#root",
	data: {
		selected: '',
		albums: [],
	},
	mounted() {
		//Chiamata API per recuperare i dati necessari che vengono salvati in albums[]
		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(result => {
 			let {response} = result.data;
			for(let i = 0; i < response.length; i++){
				this.albums.push(response[i]);
			} 
		})
	},
	computed:{ 
		//Imposta filtro per genere
		filteredMusic(){
			if (this.selected == ''){
				return this.albums
			} else {
				return this.albums.filter(element=>{
					if (this.selected == element.genre){
						return element;
					}
				})
			}
		}
	},
})

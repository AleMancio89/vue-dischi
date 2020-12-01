/* 
Facciamo una chiamata ajax all'api di boolean al seguente indirizzo.
L'api ci restituirà decina di dischi musicali che dovremo mostrare all'utente utilizzando Vue.
*/

const app = new Vue({
	el:"#root",
	data: {
		albums: [],
	},
	mounted() {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then(result => {
 			let {response} = result.data;
			for(let i = 0; i < response.length; i++){
				this.albums.push(response[i]);
			} 
		})
	}
})
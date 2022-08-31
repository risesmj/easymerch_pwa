class ItemProductTile extends HTMLElement{

	constructor(){
		super();
		
		const shadow = this.attachShadow({mode: 'open'});
		
		//Create component father
		let div = document.createElement("div");
		div.classList.add('card');
		
		//Create image product
		let img = document.createElement("img");
		img.classList.add('card--avatar');
		img.src = this.getAttribute("src");
		
		//Create title product
		let h1 = document.createElement("h1");
		h1.classList.add('card--title');
		h1.innerHTML = this.getAttribute("title");
		
		//Create link access details product
		let a = document.createElement("a");
		a.classList.add('card--link')
		a.innerHTML = "Ver Barcode";
		
		div.appendChild(img);
		div.appendChild(h1);
		div.appendChild(a);

        let style  = document.createElement('style');
        style.textContent = `
		.card {
			display: flex;
			align-items: center;
			flex-direction: column;
			width: 15rem auto;
			height: 15rem;
			background: #fff;
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
			border-radius: 10px;
			margin: auto;
			overflow: hidden;
			}
			.card--avatar {
			width: 10em;
			height: 9.5rem;
			object-fit: fit;
			}
			.card--title {
			color: #222;
			font-weight: 700;
			text-transform: capitalize;
			font-size: 1.1rem;
			margin-top: 0.5rem;
			}
			.card--link {
			text-decoration: none;
			background: #db4938;
			color: #fff;
			padding: 0.3rem 1rem;
			border-radius: 20px;
		}`;
		
		shadow.appendChild(style);
		shadow.appendChild(div);
	}
}

customElements.define('item-product-tile',ItemProductTile)

class Figure {
	#allCorners;
	#topLeft;
	#topRight;
	#bottomRight;
	#bottomleft;
	#borderWidth;
	#figure;
	#allBorders;
	#borderColor;
	#backgroundColor;
	#borderStyle;
	constructor() {
		this.#figure = document.querySelector(".figure");
		this.#allCorners = document.querySelector("#all-corners");
		this.#topLeft = document.querySelector("#top-left");
		this.#topRight = document.querySelector("#top-right");
		this.#bottomRight = document.querySelector("#bottom-right");
		this.#bottomleft = document.querySelector("#bottom-left");
		this.#borderWidth = document.querySelector("#border-width");
		this.#allBorders = document.querySelector("#all-borders");
		this.#borderColor = document.querySelector("#border-color");
		this.#backgroundColor = document.querySelector("#background-color");
		this.#borderStyle = document.querySelector("#border-style");
	}
	Allcorners() {
		this.#allCorners.oninput = () => {
			this.#figure.style.borderRadius = this.#allCorners.value + "px";
		};
	}
	Topleft() {
		this.#topLeft.oninput = () => {
			this.#figure.style.borderTopLeftRadius = this.#topLeft.value + "px";
		};
	}
	TopRight() {
		this.#topRight.oninput = () => {
			this.#figure.style.borderTopRightRadius =
				this.#topRight.value + "px";
		};
	}
	BottomLeft() {
		this.#bottomleft.oninput = () => {
			this.#figure.style.borderBottomLeftRadius =
				this.#bottomleft.value + "px";
		};
	}
	BottomRight() {
		this.#bottomRight.oninput = () => {
			this.#figure.style.borderBottomRightRadius =
				this.#bottomRight.value + "px";
		};
	}
	BorderWidth() {
		this.#borderWidth.oninput = () => {
			this.#figure.style.borderWidth = this.#borderWidth.value + "px";
		};
	}
	AllBordersWidth() {
		this.#allBorders.oninput = () => {
			const value = this.#allBorders.value + "px";
			this.#figure.style.borderTopWidth = value;
			this.#figure.style.borderRightWidth = value;
			this.#figure.style.bordeLefttWidth = value;
			this.#figure.style.borderBottomWidth = value;
		};
	}
	UpdateBorderColor() {
		this.#figure.style.borderColor = this.#borderColor.value;

		const changeColor = () => {
			this.#figure.style.borderColor = this.#borderColor.value;
		};
		this.#borderColor.oninput = changeColor;
		this.#borderColor.onchange = changeColor;
	}
	UpdateBackgroundColor() {
		this.#figure.style.backgroundColor = this.#backgroundColor.value;
		const changeBackground = () => {
			this.#figure.style.backgroundColor = this.#backgroundColor.value;
		};
		this.#backgroundColor.oninput = changeBackground;
		this.#backgroundColor.onchange = changeBackground;
	}
	UpdateBorderStyle() {
		this.#figure.style.borderStyle = this.#borderStyle.value;
		this.#borderStyle.onchange = () => {
			this.#figure.style.borderStyle = this.#borderStyle.value;
		};
	}
}
const figure = new Figure();
figure.Allcorners();
figure.Topleft();
figure.TopRight();
figure.BottomLeft();
figure.BottomRight();
figure.BorderWidth();
figure.AllBordersWidth();
figure.UpdateBorderColor();
figure.UpdateBackgroundColor();
figure.UpdateBorderStyle();

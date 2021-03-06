let v = new Vue({
	el: "#app",
	data: {
		page: 0,
		user: {
			name: "",
			family: "",
			patronymic: ""
		},
		quest: getQuest(),
		isQ: 0,
		ball: 0,
		desc: ""
	},
	methods: {
		next(){
			this.page++;
		},
		registr(){
			if(
				this.user.name &&
				this.user.family
				){
				this.next();
			}
		},
		nextQ(type){

			if(type == this.quest[this.isQ].a){
				this.ball++;
			}

			this.isQ++;

			let l = this.quest.length;

			if(this.isQ == l){

				this.next();
			}

			if(this.ball <= 6){
				this.desc = "Вам стоит изучить данный вопрос более подробно."
			}else if(this.ball > 6 && this.ball <= 9){
				this.desc = "Вы понимаете вопрос, но стоит повторить."
			}
			else if(this.ball == 10){
				this.desc = "Вы отлично понимаете тему. Так же можете прочесть материал."
			}
			
			
		}
	}
});



function getQuest() {
	return [
		{
			q: "Простая процедура регистрации, требуется меньше документов?",
			a: "ИП"
		},
		{
			q: "Может быть несколько учредителей и ответственность каждого в пределах его доли?",
			a: "ООО"
		},
		{
			q: "Нет ограничений по видам деятельности?",
			a: "ООО"
		},
		{
			q: "Упрощенная бухгалтерская отчетность?",
			a: "ИП"
		},
		{
			q: "Ответственность в пределах собственного имущества, даже после закрытия?",
			a: "ИП"
		},
		{
			q: "Ответственность только в пределах уставного капитала?",
			a: "ООО"
		},
		{
			q: "Нет возможности продать, купить или переоформить?",
			a: "ИП"
		},
		{
			q: "Регистрацию по любому юридическому адресу в пределах РФ?",
			a: "ООО"
		},
		{
			q: "Высоки шансы стать узнаваемым на рынке: бренд - великое дело?",
			a: "ООО"
		},
		{
			q: "Необходимость ведения полноценного бухгалтерского, налогового учета?",
			a: "ООО"
		},
	]
}
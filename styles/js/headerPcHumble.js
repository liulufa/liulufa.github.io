//Vue.component('header-pc-humble', {
let headerPcHumble = Vue.extend({	
	template: `
	<div>
		<div class="pc_header" v-bind:style="header_height" v-bind:class="[ col == 'mini' || col == 'sm'  ? 'i_info_textAlgin' : '' ]">
			<div class="row no-gutters align-items-center">
				<div class="col-6 col-sm-4 col-md-4 col-lg-4" style="text-align: left;">
					<img @click="toHome" class="img-fluid header_logo" src="images/logo/dlr_top_logo.png" />
				</div>
				<div style="text-align: right;" class="col-6 col-md-8 col-lg-8 js_txt">
					<span>网站建设</span>
					<span @click="toIndex">网站案例</span>
					<span @click="toMiniProgram">小程序</span>
					<span @click="toAPP">APP</span>
					<span>公司</span>
					<span>了解价格</span>
				</div>
			</div>
		</div>
	</div>
	`,
	data: function() {
		return {
			pageWidth: '',
			changeScroll: 0,
			col: '',
			header_height: {
				'top': '-82px'
			}
		}
	},
	watch: {
		pageWidth: function(val, oldVal) {
			if(val >= 1200) {
				this.col = 'xl';
			} else if(val >= 992) {
				this.col = 'lg';
			} else if(val >= 768) {
				this.col = 'md';
			} else if(val >= 576) {
				this.col = 'sm';
			} else if(val < 576) {
				this.col = 'mini';
			}
		},
		changeScroll: function(val, oldVal) {
			let amount = val - oldVal;
			var clientWidth = document.body.clientWidth;
			if(clientWidth >= 768) {
				if(val == 0){
					this.header_height.top = '-82px';
					return false;
				}
				
				if(amount > 0) {
					this.header_height.top = '-82px';
				} else if(amount < 0) {
					this.header_height.top = '0px';
				}
			}
		}
	},
	created() {
		this.pageWidth = document.body.clientWidth;
	},
	mounted() {
		const that = this;
		var clientWidth = document.body.clientWidth;
		if(clientWidth >= 768) {
			window.addEventListener('scroll', this.handleScroll);
		}
	},
	methods: {
		handleScroll() {
			this.changeScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		},
		toHome() {
			setTimeout(function() {
				window.location = 'home.html';
			}, 500)
		},
		toIndex() {
			setTimeout(function() {
				window.location = 'index.html';
			}, 500)
		},
		toMiniProgram() {
			setTimeout(function() {
				window.location = 'miniProgram.html';
			}, 500)
		},
		toAPP() {
			setTimeout(function() {
				window.location = 'app.html';
			}, 500)
		}
	}	
})


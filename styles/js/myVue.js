Vue.component('header-pc-humble', headerPcHumble);
Vue.component('slide-pc', slidePc);
Vue.component('header-pc', headerPc);
Vue.component('home-pc', homePc);
Vue.component('footer-pc', footerPc);
Vue.component('home-footer',homeFooter);

var vm = new Vue({
	el: '#app',
	data: {
		pageWidth: '',
		col: '',
		resizeHeight: {
			'width': '',
			'height': ''
		},
		transition_img_top: {
			'top': '66px'
		},		
		show_main_img: false,
		wz_dy_show: false,
		shadowNumber: 0,
		isShowShadow: false,
		isShowImgShadow: 0,
		isShowImgShadowThree: 0,
		isShowImgShadowFour: 0,
		isShowImgShadowFive: 0,
		isShowImgShadowSix: 0,
		isShowImgShadowSeven: 0,
		isShowImgShadowEight: 0
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
		shadowNumber: function(val, oldVal) {
			if(val == 0) {
				this.isShowImgShadowThree = 0;
				this.isShowImgShadowFour = 0;
				this.isShowImgShadowFive = 0;
				this.isShowImgShadowSix = 0;
				this.isShowImgShadowSeven = 0;
				this.isShowImgShadowEight = 0;
			} else if(val == 1) {
				this.isShowImgShadowThree = 0;
				this.isShowImgShadowFour = 2;
				this.isShowImgShadowFive = 3;
				this.isShowImgShadowSix = 4;
				this.isShowImgShadowSeven = 5;
				this.isShowImgShadowEight = 6;
			} else if(val == 2) {
				this.isShowImgShadowThree = 1;
				this.isShowImgShadowFour = 0;
				this.isShowImgShadowFive = 3;
				this.isShowImgShadowSix = 4;
				this.isShowImgShadowSeven = 5;
				this.isShowImgShadowEight = 6;
			} else if(val == 3) {
				this.isShowImgShadowThree = 1;
				this.isShowImgShadowFour = 2;
				this.isShowImgShadowFive = 0;
				this.isShowImgShadowSix = 4;
				this.isShowImgShadowSeven = 5;
				this.isShowImgShadowEight = 6;
			} else if(val == 4) {
				this.isShowImgShadowThree = 1;
				this.isShowImgShadowFour = 2;
				this.isShowImgShadowFive = 3;
				this.isShowImgShadowSix = 0;
				this.isShowImgShadowSeven = 5;
				this.isShowImgShadowEight = 6;
			} else if(val == 5) {
				this.isShowImgShadowThree = 1;
				this.isShowImgShadowFour = 2;
				this.isShowImgShadowFive = 3;
				this.isShowImgShadowSix = 4;
				this.isShowImgShadowSeven = 0;
				this.isShowImgShadowEight = 6;
			} else if(val == 6) {
				this.isShowImgShadowThree = 1;
				this.isShowImgShadowFour = 2;
				this.isShowImgShadowFive = 3;
				this.isShowImgShadowSix = 4;
				this.isShowImgShadowSeven = 5;
				this.isShowImgShadowEight = 0;
			}
		}
	},
	computed: {
		imgWidth: function() {
			if(this.col == 'md') {
				return {
					'width': '50%'
				}
			} else if(this.col == 'lg') {
				return {
					'width': '35%'
				}
			} else if(this.col == 'mini') {
				return {
					'width': '40%'
				}
			} else if(this.col == 'xl') {
				return {
					'width': '25%'
				}
			} else if(this.col == 'sm') {
				return {
					'width': '40%'
				}
			}
		}
	},
	created() {
		this.pageWidth = document.body.clientWidth;		
	},
	mounted() {
		var clientWidth = document.body.clientWidth;
		var _this = this;
		if(clientWidth >= 768) {

			setTimeout(function(){
				var ipad =  _this.$refs.ipad_img;
				var left = ipad.width - '117';
				var left_silde = left/2;
				var img = _this.$refs.ipad_main_img;
				img.style.width = left + 'px';
				_this.show_main_img = true;
			},500)
			
			if(_this.$refs.resize_img){
				_this.$nextTick(() => {			
					_this.getImgHeight();
				});
				window.onresize = () => {
					return(() => {
						let t = _this.$refs.resize_img;
						_this.resizeHeight.width = t.clientWidth + "px";
						_this.resizeHeight.height = t.clientHeight + "px";
					})()
				}
			}
		}else {
			setTimeout(function(){					
					var ipad =  _this.$refs.ipad_img;
					if(ipad){
						var left = ipad.width - '65';
						var img = _this.$refs.ipad_main_img;
						img.style.width = left + 'px';
						_this.transition_img_top.top = '35px';
						_this.show_main_img = true;
					}
			},500)
		}
	},
	methods: {
		getImgHeight(){
			var _this = this;
			setTimeout(function(){
				var t = _this.$refs.resize_img.getBoundingClientRect();
				var width = t.width;
				var height = t.height;
				_this.resizeHeight.width = width + "px";
				_this.resizeHeight.height = height + "px";
			},500)			
		},
		toCaseOne() {
			window.open("case-1.html", '_blank');
		},
		toCaseTwo() {
			window.open("case-2.html", '_blank');
		},
		toCaseThree() {
			window.open("case-3.html", '_blank');
		},
		toCaseFour() {
			window.open("case-4.html", '_blank');
		},
		toCaseFive() {
			window.open("case-5.html", '_blank');
		},
		toCaseSix() {
			window.open("case-6.html", '_blank');
		},
		toCaseSeven() {
			window.open("case-7.html", '_blank');
		},
		toCaseEight() {
			window.open("case-8.html", '_blank');
		},
		toWzCaseOne() {
			window.open("http://www.ba-du.cn", '_blank');
		},
		toWzCaseTwo() {
			window.open("http://gb.ebt.cn", '_blank');	
		},
		toWzCaseThree() {
			window.open("https://www.litety.com", '_blank');	
		},
		toXcxCaseThree(){
			window.open("case-9.html", '_blank');
		},
		toXcxCaseFour() {
			window.open("case-10.html", '_blank');
		},
		toXcxCaseFive() {
			window.open("case-11.html", '_blank');
		},
		toXcxCaseSix() {
			window.open("case-12.html", '_blank');
		},
		toWzCaseFour() {
			window.open("http://www.zhivida.com", '_blank');
		},
		toWzCaseFive() {
			window.open("http://www.avinong.com", '_blank');
		},
		toWzCaseSix() {			
			window.open("http://www.zxled.cc", '_blank');
		},
		toDy() {
			window.open("http://www.dyzygd.com", '_blank');
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
});

/**
 * 移动端组件============================================================>
 */

Vue.component('header-phone', {
	template: `
	<div>
	<div v-bind:style="iphoneBgColor" class="row no-gutters align-items-center sy_info fixed-top">
		<div class="col-6 col-sm-4 col-md-4 col-lg-4" style="text-align: left;">
			<img @click="toHome" v-bind:style="imgWidth" src="images/logo/dlr.png" />
		</div>						
		<div class="col-6 col-sm-6 col-md-3 info_txt" v-if=" col == 'mini' ">
			<div style="text-align: right;" v-bind:class="[ col == 'mini'  ? 'i_info_textAlgin' : '' ]" class="dropdown">
				<img v-on:click="showList = !showList" v-bind:style="[ col == 'mini'  ? i_phone : i_pc ]" src="images/icon/icon-list.png" />
			</div>
		</div>						
		<div style="text-align: right;" class="col-6 col-md-8 col-lg-8 info_txt" v-else>
			<span>网站建设</span>
			<span @click="toIndex">网站案例</span>
			<span @click="toMiniProgram">小程序</span>
			<span @click="toAPP">APP</span>
			<span>公司</span>
			<span>了解价格</span>							
		</div>
	</div>
	<transition name="custom-classes-transition" enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
		<ul v-if="showList" class="col-12 phone_showList">
			<li>网站建设</li>
			<li @click="toIndex">网站案例</li>
			<li @click="toMiniProgram">小程序</li>
			<li @click="toAPP">APP</li>
			<li>公司</li>
			<li>了解价格</li>
		</ul>
	</transition>
	</div>
	`,
	data: function() {
		return {
			showList: false,
			col: '',
			i_pc: {
				'width': '10%',
			},
			i_phone: {
				'width': '12%',
			}
		}
	},
	computed: {
		imgWidth: function() {
			if(vm.col == 'md') {
				return {
					'width': '50%'
				}
			} else if(vm.col == 'lg') {
				return {
					'width': '35%'
				}
			} else if(vm.col == 'mini') {
				return {
					'width': '40%'
				}
			} else if(vm.col == 'xl') {
				return {
					'width': '25%'
				}
			} else if(vm.col == 'sm') {
				return {
					'width': '40%'
				}
			}
		},
		iphoneBgColor: function() {
			if(vm.col == 'mini') {
				return {
					'backgroundColor': '#000',
					'paddingTop': '3%'
				}
			} else if(vm.col == 'sm') {
				return {
					'backgroundColor': '#000',
					'paddingTop': '3%',
					'paddingBottom': '3%'
				}
			}
		}
	},
	created() {
		this.col = vm.col;
	},
	methods: {
		toHome() {
			setTimeout(function() {
				window.location = 'home.html';
			}, 500)
		},
		toIndex() {
			var that = this;
			setTimeout(function() {
				window.location = 'index.html';
			}, 500);
		},
		toMiniProgram() {
			var that = this;
			setTimeout(function() {
				window.location = 'miniProgram.html';
			}, 500);
		},
		toAPP() {
			var that = this;
			setTimeout(function() {
				window.location = 'app.html';
			}, 500);
		}
	}

})

Vue.component('carousel-phone', {
	props: ['col'],
	template: `
	<div>
		<div v-bind:class="[ col == 'mini' || col == 'sm'  ? 'i_info_textAlgin' : '' ]">
			<div class="carousel slide">
				<div class="carousel-inner" style="height:350px;">
					<div class="carousel-item active phone_txt">									
						<p class="col-12 col-sm-4 col-md-4 col-lg-4 h5 phone_animate">团队精神</p>
						<p class="col-12 col-sm-4 col-md-4 col-lg-4 h6 phone_animate">我们从别人的发明中享受了很大的利益，我们也应该乐于有机会以我们的任何一种发明为别人服务;而这种事我们应该自愿的和慷慨地去作!</p>
					</div>
				</div>
			</div>
		</div>
		<div class="sharing_js_phone">
			<div class="col-12 col-md-12 col-lg-12 js_p_txt text-center">
				<span @click="toIndex" v-bind:style="[ showWzline ? brderLine : '' ]">网站案例</span>
				<span @click="toMiniProgram" v-bind:style="[ showXcxline ? brderLine : '' ]">小程序案例</span>
				<span @click="toAPP" v-bind:style="[ showAPPxline ? brderLine : '' ]">APP案例</span>
			</div>
		</div>
	</div>
  	`,
	data: function() {
		return {
			showWzline: false,
			showXcxline: false,
			showAPPxline: false,
			brderLine: {
				'borderBottom': '1.5px solid #F4511E'
			}
		}
	},
	created() {
		var url = window.location.href.substr(26);
		if(url == 'index.html') {
			this.showWzline = true;
		} else if(url == 'miniProgram.html') {
			this.showXcxline = true;
		} else if(url == 'app.html') {
			this.showAPPxline = true;
		}
	},
	methods: {
		toIndex() {
			var that = this;
			setTimeout(function() {
				window.location = 'index.html';
			}, 500);
		},
		toMiniProgram() {
			var that = this;
			setTimeout(function() {
				window.location = 'miniProgram.html';
			}, 500);
		},
		toAPP() {
			var that = this;
			setTimeout(function() {
				window.location = 'app.html';
			}, 500);
		}
	}
})


Vue.component('carousel-phone-home', {
	props: ['col'],
	template: `
	<div>
		<div v-bind:class="[ col == 'mini' || col == 'sm'  ? 'i_info_textAlgin' : '' ]">
			<div class="carousel slide">
				<div class="carousel-inner" style="height:350px;">
					<div class="carousel-item active phone_txt">									
						<p class="col-12 col-sm-4 col-md-4 col-lg-4 h5 phone_animate">团队精神</p>
						<p class="col-12 col-sm-4 col-md-4 col-lg-4 h6 phone_animate">我们从别人的发明中享受了很大的利益，我们也应该乐于有机会以我们的任何一种发明为别人服务;而这种事我们应该自愿的和慷慨地去作!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  	`,
})

Vue.component('footer-phone', {
	template: `
	<div>
		<div class="cep_right col-12" v-bind:style="resetHeight">
			<div class="row no-gutters">
				<div class="col-12 phone_tj_txt font-weight-lighter">
					<p class="text-monospace">客户不同</p>
					<p class="text-monospace">需求不同</p>
					<p class="text-monospace">我们的服务标准和方式也要有所不同</p>
				</div>
				<div class="col-12">
					<div class="input-group">
						<input type="text" placeholder="联系姓名" aria-label="Username" aria-describedby="addon-wrapping" class="form-control">
						<input type="text" placeholder="联系电话" aria-label="Username" aria-describedby="addon-wrapping" class="form-control">
					</div>
				</div>
				<div class="col-12">
					<div class="input-group" style="width: 100%;">
						<textarea placeholder="留下建议/需求" class="form-control"></textarea>
					</div>
				</div>
				<button type="button" style="width: 100%;padding: 2% 0;margin: 2% 0;" class="btn btn-info">提交需求</button>
				<p class="right_txt_bottom">请留下您的建议或/需求，我们会在24小时内进行联系</p>
			</div>
		</div>
		<div class="phone_footer">
			<p class="footer_top">返回顶部</p>
			<ul class="col-12">
				<li>网站建设</li>
				<li @click="toIndex">网站案例</li>
				<li @click="toMiniProgram">小程序</li>
				<li @click="toAPP">APP</li>
				<li>公司</li>
				<li>了解价格</li>
			</ul>
			<div class="text-right">
				<p>电话：<span>158-1940-0369</span></p>
				<p>邮箱：<span>553939810@qq.com</span></p>
				<p>珠海市香洲区明珠南路2007号金嘉创意谷五栋</p>
			</div>
		</div>
		<transition name="custom-classes-transition-phone" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
			<div v-if="phone_bottom" class="fixed-bottom phone_bottom">
				<div class="row no-gutters justify-content-center">
					<div class="col-4">
						<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=443887498&amp;site=qq&amp;menu=yes" target="blank">
							<p><img src="images/icon/qq_icon_d.png"></p>
							<p>QQ联系</p>
						</a>
					</div>
					<div class="col-4" @click="wx_ewm = !wx_ewm">
						<transition name="custom-classes-transition-phone" enter-active-class="animated slideInUp">
							<div v-if="wx_ewm" class="ewm_bottom">
								<img src="images/ewm/dlrewm.jpg" />
							</div>
						</transition>
						<p><img src="images/icon/wx_icon_d.png"></p>
						<p>微信联系</p>							
					</div>					
				</div>
			</div>
		</transition>
	</div>
	`,
	data: function() {
		return {
			wx_ewm: false,
			phone_bottom: false,
			changeScrollPhone: 0,
			scrollTop: 0,
			resetHeight: {
				'height': '',
				'backgroundColor': ''
			}
		}
	},
	watch: {
		changeScrollPhone: function(val, oldVal) {
			let amount = val - oldVal;
			var clientWidth = document.body.clientWidth;
			if(clientWidth < 768) {
				if(amount < 0) {
					this.phone_bottom = true;
				} else {
					this.phone_bottom = false;
				}
			}
		}
	},
	mounted() {
		const that = this;
		var clientWidth = document.body.clientWidth;
		if(clientWidth < 768) {
			that.resetHeight.backgroundColor = '#F5F5F5';
			window.addEventListener('scroll', this.handleScrollPhone);
		}
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollToTop)
	},
	methods: {
		handleScrollPhone() {
			this.changeScrollPhone = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		},
		// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			let that = this
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			that.scrollTop = scrollTop;
		},
		toIndex() {
			var that = this;
			setTimeout(function() {
				window.location = 'index.html';
			}, 500);
		},
		toMiniProgram() {
			var that = this;
			setTimeout(function() {
				window.location = 'miniProgram.html';
			}, 500);
		},
		toAPP() {
			var that = this;
			setTimeout(function() {
				window.location = 'app.html';
			}, 500);
		}
	}
})
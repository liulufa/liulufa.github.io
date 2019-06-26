/**
 * pc端组件============================================================>
 */
let homePc = Vue.extend({	
	template: `
	<div>
		<div class="pc_header" v-bind:style="header_height" v-bind:class="[ col == 'mini' || col == 'sm'  ? 'i_info_textAlgin' : '' ]">
			<div class="row no-gutters align-items-center">
				<div class="col-6 col-sm-4 col-md-4 col-lg-4" style="text-align: left;">
					<img class="img-fluid header_logo" @click="toHome" src="images/logo/dlr_top_logo.png" />
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
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<div class="pc_slide_hd" v-bind:class="[ col == 'mini' || col == 'sm'  ? 'i_info_textAlgin' : '' ]">
				<div class="row no-gutters align-items-center">
					<div class="col-12 col-sm col-md col-lg" style="text-align: left;">
						<img @click="toHome" class="img-fluid slide_logo" src="images/logo/dlr.png" />
					</div>
					<div style="text-align: right;" class="col-6 col-md-8 col-lg-8 slide_txt">
						<span>网站建设</span>
						<span @click="toIndex">网站案例</span>
						<span @click="toMiniProgram">小程序</span>
						<span @click="toAPP">APP</span>
						<span>公司</span>
						<span>了解价格</span>
					</div>
				</div>
				<div class="text-center slide_state col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h1>所有创新，源于不断探索</h1>
					<h6>业内顶尖互联网设计团队一直是我们努力的方向，提升用户体验，美观用户界面，为用户呈现更精致的app/小程序/网站 是我们的使命</h6>
				</div>
			</div>
			<div class="carousel-inner">
				<img style="background-size: center;" src="images/bg/bg-01.jpg" class="d-block w-100" alt="...">
			</div>
		</div>
		<div class="fixed-right">
			<aside class="aside-nav" style="opacity: 1">
			<div class="aside-nav-in">
				<div class="aside-nav-one more-width more-width-call">
					<a href="javascript:;">
						<div class="aside-nav-one-img">
							<img src="images/slideIcon/icon_phone.png" alt="">
						</div>
						<div class="aside-nav-one-desc">
							13729533571
						</div>
					</a>
				</div>
				<div class="aside-nav-one more-width more-width-qq">
					<div class="aside-nav-one-img">
						<img src="images/slideIcon/icon_qq.png" alt="">
					</div>
					<div class="aside-nav-one-desc">
						<div class="qq-name-box">
							<div class="qq-name">
								<a href="tencent://message/?uin=553939810"><i style=""></i><span>黄先生</span></a>
							</div>
						</div>
					</div>
				</div>
				<div class="aside-nav-one more-width back-top">
					<a href="javascript:;">
						<div class="aside-nav-one-img">
							<img src="images/slideIcon/icon_top.png" alt="">
						</div>
						<div class="aside-nav-one-desc backTop">
							返回顶部
						</div>
					</a>
				</div>
			</div>
			</aside>
		</div>	
	</div>
	`,
	data: function() {
		return {
			currentPageName: '',
  			showXcxline: false,
  			showAPPxline: false,
			pageWidth: '',
			isShowInnerImg: false,
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
				this.isShowInnerImg = true;
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
		},
		iphoneBgColor: function() {
			if(this.col == 'sm') {
				return {
					'backgroundColor': '#000',
					'paddingTop': '3%',
					'paddingBottom': '3%'
				}
			}
		}
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
		activeImage() {
			this.showTip = true;
			this.highlightImage = 1;
		},
		hideImage() {
			this.showTip = false;
			this.highlightImage = 5;
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
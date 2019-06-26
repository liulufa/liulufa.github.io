/**
 * pc端组件============================================================>
 */
let footerPc = Vue.extend({
	template: `
	<div>
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
		<div class="pc_line"></div>
		<div class="pc_communication">
			<blockquote class="blockquote text-center communication_animate">
				<div class="d-none d-xl-block mb-0 h3">有一种美丽叫信任，它美丽着人们的心灵，美丽着每个不起眼的角落，美丽着这个大千世界</div>
				<div class="d-none d-lg-block d-xl-none mb-0 h4">有一种美丽叫信任，它美丽着人们的心灵，美丽着每个不起眼的角落，美丽着这个大千世界</div>
				<div class="d-none d-md-block d-lg-none mb-0 h5">有一种美丽叫信任，它美丽着人们的心灵，美丽着每个不起眼的角落，美丽着这个大千世界</div>
				<footer class="blockquote-footer"><cite title="Source Title h6">信任，好似悄悄来临的春天，让紧闭的花蕾瞬间绽放。善良，会像一双翅膀飞进你我的心，让心与心沟通。</cite></footer>
			</blockquote>
		</div>
		<div class="pc_cep">
			<div class="cep_bg" v-bind:style="setHeight">
				<div class="cep_left col-lg-12 col-xl-6" ref="resize_left">
					<div class="row no-gutters left_bg">
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-02.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-03.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-06.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-11.jpg">
						</div>
					</div>
					<div class="row no-gutters left_bg">
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-01.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-10.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-17.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-16.jpg">
						</div>
					</div>
					<div class="row no-gutters left_bg">
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-26.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-28.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-31.jpg">
						</div>
						<div class="col-12 col-sm col-md col-lg">
							<img class="img-fluid" src="images/qyLogo/LOGO-34.jpg">
						</div>
					</div>
				</div>
				<div class="cep_right col-lg-12 col-xl-6" v-bind:style="resetHeight">
					<div class="row no-gutters">
						<div class="col-12">
							<div class="d-none d-xl-block mb-0 h4">客户不同、需求不同、我们的服务标准和方式也要有所不同。</div>
							<div class="d-none d-lg-block d-xl-none mb-0 h5">客户不同、需求不同、我们的服务标准和方式也要有所不同。</div>
							<div class="d-none d-md-block d-lg-none mb-0 h6">客户不同、需求不同、我们的服务标准和方式也要有所不同。</div>
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
						<!--<button type="button" style="width: 100%;padding: 2% 0;margin: 2% 0;" class="btn btn-info">提交需求</button>-->
						<div class="send btn-circle">
							<input @mouseover="bthMouseOver($event)" @mouseleave="bthMouseLeave($event)" type="submit" id="submitNeed" value="提交项目需求" />
							<i class="btn-circle-hover" v-bind:style="[hoverBtn ? btnHover : btnHindeHover]"></i></i>
							<i class="btn-circle-click"></i>
						</div>							
					</div>
				</div>
			</div>
		</div>
		<div class="pc_footer">
			<div class="row no-gutters align-items-center">
				<div class="col-12 col-sm col-md-12 col-lg-12 col-xl-6 flex_left">
				<!--<div class="col-12 col-sm col-md-12 flex_left">-->
					<div class="col-6 col-md-2">
						<p>经典案例</p>
						<p>护肤化妆</p>
						<p>服装鞋饰</p>
						<p>品牌汽车</p>
						<p>智能电子</p>
					</div>
					<div class="col-6 col-md-2">
						<p>网站建设</p>
						<p>网络营销</p>
						<p>解决方案</p>
					</div>
					<div class="col-6 col-md-2">
						<p @click="toIndex">手机/H5</p>
						<p @click="toIndex">手机网站</p>
						<p @click="toMiniProgram">微信小程序</p>
					</div>
					<div class="col-6 col-md-2">
						<p>关于独立日</p>
						<p>企业文化</p>
						<p>品牌理念</p>
						<p>团队技术</p>
					</div>
				</div>
				<div class="col-12 col-sm col-md-12 col-lg-12 col-xl-6">
				<!--<div class="col-12 col-sm col-md-12 flex_left">-->
					<div class="col-12 col-sm col-md col-lg">
						<div class="footer_right_xl d-none d-xl-block d-md-none d-lg-none">
							<transition name="tip_fade">
								<img style="position: absolute;bottom: 20px;right: 0;" v-if="showTip" src="images/ewm/dlrewm.jpg">
							</transition>
							<div class="right_image_xl">
								<img @mouseover="showHighLight = 1" @mouseleave="showHighLight = 0" v-bind:style="[ showOpacityOne == 1 ? opacity: hideOpacity ]" class="image_show footer_icon_wx" src="images/icon/wx_icon.png">
								<a @mouseover="showHighLight = 2" @mouseleave="showHighLight = 0" href="http://wpa.qq.com/msgrd?v=3&amp;uin=443887498&amp;site=qq&amp;menu=yes" target="blank">
									<img class="footer_icon_qq" v-bind:style="[ showOpacityTwo == 2 ? opacity: hideOpacity ]" src="images/icon/qq_icon.png">
								</a>
							</div>
							<div class="right_info">
								<p>电话：<span>158-1940-0369</span></p>
								<p>邮箱：<span>553939810@qq.com</span></p>
								<p>珠海市香洲区明珠南路2007号金嘉创意谷五栋</p>
							</div>
						</div>
						<div class="footer_right d-none d-lg-block d-xl-none d-md-block">
							<transition name="tip_fade">
								<img class="align-items-center" style="position: absolute;bottom: 200px;left: 35%;" v-if="showTip" src="images/ewm/dlrewm.jpg">
							</transition>
							<div class="right_image_lg">
								<img @mouseover="showHighLight = 1" @mouseleave="showHighLight = 0" v-bind:style="[ showOpacityOne == 1 ? opacity: hideOpacity ]" class="image_show footer_icon_wx" src="images/icon/wx_icon.png">
								<a @mouseover="showHighLight == 2" @mouseleave="showHighLight == 0" href="http://wpa.qq.com/msgrd?v=3&amp;uin=443887498&amp;site=qq&amp;menu=yes" target="blank">
									<img class="footer_icon_qq" v-bind:style="[ showOpacityOne == 2 ? opacity: hideOpacity ]" src="images/icon/qq_icon.png">
								</a>
							</div>
							<div class="right_info">
								<p>电话：<span>158-1940-0369</span></p>
								<p>邮箱：<span>553939810@qq.com</span></p>
								<p>珠海市香洲区明珠南路2007号金嘉创意谷五栋</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	`,
	data: function() {
		return {
			hoverBtn: false,
			highlightImage: 3,
			showTip: false,
			showHighLight: 0,
			showOpacityOne: 0,
			showOpacityTwo:0,
			btnHover: {		
				'top': '',
			    'left': '',
			    'width': '1802.5px',
			    'height': '1802.5px',
			    'opacity': '1',
			    'transition': 'width 0.8s ease 0s, height 0.8s ease 0s, opacity 0.8s ease 0s'
			},
			btnHindeHover: {
				'top': '',
			    'left': '',
			    'width': '0px',
			    'height': '0px',
			    'opacity': '0',
			    'transition': 'width 0.6s ease 0s, height 0.6s ease 0s, opacity 1.3s ease 0s'			    
			},
			setHeight: {
				'float': 'left',
				'height': '',
				'backgroundColor': ''
			},
			resetHeight: {
				'height': '',
				'backgroundColor': '',
				'display': 'flex',
			    'alignItems': 'center'
			},
			opacity: {
				'opacity': '0.3',
				'transition': '0.2s ease-in'
			},
			hideOpacity: {
				'opacity': '1',
				'transition': '0.2s ease-in'
			},
		}
	},
	watch: {
		showHighLight: function(val, oldVal){
			if(this.showHighLight == 0){
				this.showOpacityOne = 0;
				this.showOpacityTwo = 0;
				this.showTip = false;
			}else if(this.showHighLight == 1){
				this.showOpacityOne = 0;
				this.showOpacityTwo = 2;
				this.showTip = true;
			}else if(this.showHighLight == 2){
				this.showOpacityOne = 1;
				this.showOpacityTwo = 0;				
			}
		}
	},
	mounted() {
		const that = this;
		var clientWidth = document.body.clientWidth;
		if(clientWidth >= 768) {
			that.setHeight.height = '50%';
			that.setHeight.backgroundColor = '#F5F5F5';	
			setTimeout(function(){
				let size = that.$refs.resize_left;
				that.resetHeight.height = size.scrollHeight + 'px';
			},500)
			window.addEventListener('resize', that.echartsResize);
		}
	},
	methods: {
		echartsResize(){
			var that = this;
			that.setHeight.height = '';
			that.setHeight.backgroundColor = '';
			setTimeout(function(){
				let size = that.$refs.resize_left;
				that.resetHeight.height = size.scrollHeight + 'px';
				that.resetHeight.backgroundColor = '#F5F5F5';
			},500)
		},
		activeImage() {
			this.showTip = true;
			this.highlightImage = 1;
		},
		hideImage() {
			this.showTip = false;
			this.highlightImage = 5;
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
		},
		bthMouseOver(event){
			this.hoverBtn = true;
			this.btnHover.top = event.offsetY + 'px';
			this.btnHover.left = event.offsetX + 'px';
		},
		bthMouseLeave(event){
			this.hoverBtn = false;
			this.btnHindeHover.top = event.offsetY + 'px';
			this.btnHindeHover.left = event.offsetX + 'px';
		}
	},
	beforeDestroy() {
      	window.removeEventListener("resize", this.echartsResize); // 通过有名函数 解除事件订阅
    }
})
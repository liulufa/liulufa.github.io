/**
 * pc端组件============================================================>
 */
let homeFooter = Vue.extend({
	template: `
	<div>
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
	methods: {
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
	}
})
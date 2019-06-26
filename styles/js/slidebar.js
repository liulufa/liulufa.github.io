
/**
 * 侧边栏
 */
let slidePc = Vue.extend({
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
		</div>
	`
})
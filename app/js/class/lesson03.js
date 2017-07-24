$(function() {

	let [ii, btn] = [0, $("#content ul li")];

	btn.click(function() {
		ii = $(this).index();
		getAjaxA();
	});

	let getAjaxA = () => {
		$.get("showCase.json", function(dt, a) {
			if (a == 'success') {
				$("#gAjax,#content_box .box").html('');
				btn.eq(ii).addClass('active').siblings().removeClass('active');
				let d = JSON.parse(dt);
				let [data, len, jj, str, forIi, one = Math.ceil(len / 6)] = [d[ii], d[ii].obj.length, 0, '', null, ];
				// 判断有无分页
				if (data.pages) {
					// 如果有，显示分页并初始化

					// 按钮点击函数
					let getP = (onOff = 'undefined', index) => {
						index = Number.parseInt(index) - 1;
						if (onOff == 'left' && jj != 0) {
							jj--;
						} else if (onOff == 'right' && jj != one - 1) {
							jj++;
						} else if (onOff == 'click' && jj != index && index < len) {
							jj = index;
						} else if (onOff == 'undefined') {
							forIi = one == 1 ? len % 6 : 6;
							makP(undefined, forIi);
							return;
						} else {
							return;
						};
						makP(jj);
					}

					// 生成内容
					let makP = (k = 0, forIi = jj + 1 == one ? len % 6 == 0 ? 6 : len % 6 : 6) => {
						$("#gAjax,#content_box .box").html('');
						str = '';
						// 网页案例
						if (data.class == 'web') {
							one = Math.ceil(len / 6);
							for (let i = k * 6; i < k * 6 + forIi; i++) {
								str += '<li><a target="_blank" href="//www.jdreamax.com/case/';
								str += data.obj[i].href + '"><img src="images/' + data.obj[i].src + '"></a></li>';
							};
							$("<ul></ul>").attr({
								class: 'webPage'
							}).html(str).appendTo('#gAjax');
							// 画册案例
						} else if (data.class == 'album') {
							one = len;
							let [nSt, bnIi] = ['', 1];
							let {
								obj,
								btn,
								lrBtn
							} = {
								obj: $('#content_box .PictureAlbum .bn ul').selector,
								btn: $("#content_box .PictureAlbum .tab li").selector,
								lrBtn: $("#content_box .PictureAlbum .btn div").selector
							};
							str += '<div class="PictureAlbum"><div class="bn"><ul>';
							for (let i = k; i < k + 1; i++) {
								for (let j = 0; j < data.obj[i].src.length; j++) {
									nSt += '<li><img src="images/' + data.obj[i].src[j] + '"></li>';
								}
							};
							str += nSt + '</ul><div class="btn">';
							str += '<div><span></span></div><div><span></span></div></div></div>';
							str += '<ul class="tab">' + nSt + '</ul></div></div>';
							$('#gAjax').html(str);

							$(btn).eq(bnIi).addClass('active');
							$(obj).css({
								left: -bnIi * 1000
							});
							$(btn).click(function() {
								bnIi = $(this).index();
								getObjAni(bnIi);
							});
							$(lrBtn).eq(0).click(function() {
								if (bnIi > 0) {
									bnIi--;
									getObjAni(bnIi);
								}
							});
							$(lrBtn).eq(1).click(function() {
								if (bnIi < 2) {
									bnIi++;
									getObjAni(bnIi);
								}
							});
							let getObjAni = (index) => {
								$(obj).stop().animate({
									left: -index * 1000
								}, 500);
								$(btn).eq(index).addClass('active').siblings().removeClass('active');
							}
						} else if (data.class == 'poster') {
							one = Math.ceil(len / 6);
							str = '<ul class="poster">';
							for (let i = k * 6; i < k * 6 + forIi; i++) {
								str += '<li><img src="images/' + data.obj[i].src + '"></li>';
							};
							str += '</ul><div class="posterImg"><img src=""></div>';
							$('#gAjax').html(str);

							$("#content_box .poster li").click(function() {
								$("#content_box .posterImg").children().attr({
									src: $(this).children().attr('src')
								}).parent().stop().fadeIn(500);
							});

							$("#content_box .posterImg").click(function() {
								$(this).stop().fadeOut(400)
							});
						}

						let inp = '<input type="button" id="left_btn" value="上一页">';
						inp += '<div id="btn_box"></div>';
						inp += '<input type="button" id="right_btn" value="下一页">';
						inp += '<span>共 ' + one + ' 页</span>';

						$("#content_box .box").html(inp);

						// 生成分页数
						if (one < 9) {
							for (let i = 0; i < one; i++) {
								$("<input>").attr({
									type: 'button',
									// value: (i + 1).toString().padStart(10, '0123456789')
									value: i + 1
								}).appendTo('#btn_box');
							};
						} else {
							let j = 0;
							if (jj - 4 > 0) {
								[j, k] = [jj - 4, 4]
							}
							if (jj + 4 >= one - 1) {
								[j, k] = [one - 9, 9 - one + jj];
							} else { // statement
							};
							for (let i = j; i < j + 9; i++) {
								$("<input>").attr({
									type: 'button',
									value: i + 1
								}).appendTo('#btn_box');
							};
						};
						$("#btn_box input").eq(k).addClass('active').siblings().removeClass('active');

						// 上一页
						$("#left_btn").click(function() {
							getP('left');
						});

						// 下一页
						$("#right_btn").click(function() {
							getP('right');
						})

						// 点击页数
						$("#btn_box input").click(function() {
							getP('click', $(this).val());
						});
					}
					getP();
				} else {};

			}
		})
	};

	getAjaxA();


})
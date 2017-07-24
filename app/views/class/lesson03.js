// {
// 	let a = 1;
// 	let b = 2;
// 	let data = {
// 		a,
// 		b
// 	}
// 	console.log(data.a)
// }

// {
// 	let data1 = {
// 		a() {
// 			console.log(222)
// 		}
// 	}
// 	data1.a = function() {
// 		console.log(111)
// 	}
// 	console.log('')
// }

// {
// 	let a = 'aaa';
// 	let data = {
// 		[a]: 'jin'
// 	}
// 	console.log(data[a])
// }

// {
// 	console.log(Object.is(111, 111), 111 === '111');
// 	console.log(Object.is({
// 		a: 1
// 	}, {
// 		a: 1
// 	}))
// }

// {
// 	let data = {
// 		a,
// 		b,
// 		...c
// 	} = {
// 		aa: 'aaa',
// 		bb: 'bbb',
// 		cc: 'ccc',
// 		dd: 'ddd',
// 		ee: 'eee'
// 	};

// 	console.log(data);
// }
// 

// 使用
// define(['myModule'], function(myModule) {});

require(['zepto', 'iscroll', 'listloading'], function() {

});
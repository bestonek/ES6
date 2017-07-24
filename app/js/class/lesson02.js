{
	// var fnnnn = function() {
	// 	return new Promise(resolve => {
	// 		resolve("aaa")
	// 	})
	// }

	// // fnnnn().then((a) => {
	// // 	alert(a)
	// // })
	// //
	// //
	// var fnnnnn = function(callback) {
	// 	callback && callback('aaaa');
	// }

	// var aaa = function(a) {
	// 	alert(a)
	// }

	// fnnnnn(function(a) {
	// 	aaa(123)
	// })
}

{
	function fn(a, b = "world") {
		console.log(a, b)
	};
	fn('hello', 'Mr.Jin');
}

{
	var a = 1;

	function fn(a) {
		console.log(a)
	};
	fn();
}

{
	var div = document.getElementsByTagName("div");
	fn(1, div);

	function fn(x, ...arg) {
		console.log("x", x)
		for (let [i, j] of arg.entries()) {
			// j是一个对象（集合），需要把它转换成数组（Array.from）
			for (let [p, q] of Array.from(j).entries()) {
				console.log(p, q.innerHTML)
			}
		}
	}
}

{
	// let a = [1];
	// console.log(...a)
	fn(1, 2, 3, 4, 5)

	function fn(...a) {
		console.log(...a)
		for (let i of a) {
			console.log("i", i)
		}
	}

	let a = [1];
	console.log(Array.from('1234', a => Number(a) + a * 2));

}

{
	let a = 1;
	let b = 'jin';
	let c = function() {
		alert(1)
	};
	let d = {
		'json': 555
	};
	console.log();

	let arr = new Array(8).fill('0');
	console.log(arr);
	console.log(Array.of(123, 1));
}

{
	let a, b, c;
	[a, b, ...c] = [1, 2, 3, 4, 5, 6, 7];
	console.log(a, b, c);
}

{
	let a, b, c;
	({
		a,
		b,
		c = 3
	} = {
		a: 1,
		b: 2
	});
	console.log(a, b, c)
}

{
	let [, a, c] = [3, 2, 1];
	console.log(a, c);
}

{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	}

	let {
		title: esTitle,
		test: [{
			title: cnTitle
		}]
	} = metaData;

	console.log(esTitle, cnTitle)
}

{
	function last() {
		const PI = 3.1415926;
		const k = {
			a: 1
		}
		k.b = 3;
		console.log(PI, k);
	}
	last();


}
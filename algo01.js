function gcd(a, b) {
	if (a % b === 0) {
		return b;
	} else {
		return gcd(b, a % b);
	}
}

function lcm(a, b) {
	return a * (b / gcd(a, b));
}

function lcm_array(n) {
	console.log(`1 ~ ${n} 사이의 최소공배수`);
	let result = 1;
	for(let i = 1; i < n; i++) {
		result = lcm(result, i);
	}
	return result;
}

const n = process.argv.slice(2)[0];
console.log(lcm_array(n));

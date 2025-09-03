//
// autofill.js
// https://ufsso.cii.u-fukui.ac.jp/openam/XUI/* にアクセス時に実行
// ワンタイムパスワードを生成し、自動入力し、送信ボタンを自動で押す。
//
import { TOTP } from 'totp-generator';
const WAIT_TIME = 100; // 0.1秒

async function getTOTP(key) {
	let totp = TOTP.generate(key);
	if (totp.expires - Date.now() < WAIT_TIME) {
		setTimeout(() => {
			totp = TOTP.generate(key);
		}, WAIT_TIME);
	}
	return totp.otp;
}

async function autofill() {
	const target = 'input#idToken1[placeholder="ワンタイムパスワードの入力"]';
	const INTERVAL_MS = 200; // チェック間隔（ミリ秒）
	let intervalId = null;
	let handled = false;

	const onElementFound = async (element) => {
		handled = true;
		clearInterval(intervalId);

		const result = await chrome.storage.sync.get(['key']);
		const key = result.key;

		if (key === undefined) {
			alert('キーが設定されていません。\n【福井大学専用Authenticator】');
			return;
		}

		element.value = await getTOTP(key);
		const button = document.getElementById('idToken2_0');
		if (button) button.click();
	};

	intervalId = setInterval(() => {
		if (handled) return;
		const element = document.querySelector(target);
		if (element) {
			onElementFound(element);
		}
	}, INTERVAL_MS);
}

autofill();

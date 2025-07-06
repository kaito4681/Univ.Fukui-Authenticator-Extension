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

	// 要素が表示されたら実行する関数
	const onElementFound = async (element) => {
		const result = await chrome.storage.sync.get(['key']);
		const key = result.key;

		console.log(key);

		if (key === undefined) {
			alert(
				'キーが設定されていません。\n【福井大学専用Authenticator(非公式)】',
			);
			return;
		}

		element.value = await getTOTP(key);
		const button = document.getElementById('idToken2_0');
		if (button) button.click();
	};

	// DOMの変更の監視
	const observer = new MutationObserver(async (mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const element = document.querySelector(target);
				if (element) {
					await onElementFound(element);
				}
			}
		}
	});

	// 監視を開始する
	observer.observe(document.body, { childList: true, subtree: true });
}

autofill();

// 
// autofill.js
// https://ufsso.cii.u-fukui.ac.jp/openam/XUI/* にアクセス時に実行
// ワンタイムパスワードを生成し、自動入力し、送信ボタンを自動で押す。
// 
import { TOTP } from "totp-generator"

const target = 'input#idToken1[placeholder="ワンタイムパスワードの入力"]';
let key;
chrome.storage.sync.get(["key"]).then((result) => {
	key = result.key;
	if (key === undefined) return;

	// 要素が表示されたら実行する関数
	const onElementFound = (element) => {
		element.value = TOTP.generate(key).otp;
		const button = document.getElementById("idToken2_0");
		if (button) button.click();
	};

	// DOMの変更の監視
	const observer = new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const element = document.querySelector(target);
				if (element) {
					observer.disconnect();
					onElementFound(element);
				}
			}
		}
	});

	// 監視を開始する
	observer.observe(document.body, { childList: true, subtree: true });
});

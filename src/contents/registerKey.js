// 
// registerKey.js
// https://ufsso.cii.u-fukui.ac.jp/openam/XUI/* にアクセス時に実行
// キーの登録するボタンをHTML内に追加
// 
async function registerKey() {
	const target = 'input#idToken3_1[value="QRコードを表示する"]';

	// 要素が表示されたら実行する関数
	const onElementFound = async (element) => {
		const nextButton = document.querySelector('input#idToken3_0[value="次へ進む"]');
		if (nextButton) {
			nextButton.value = "拡張機能にKeyを登録して次に進む";
			nextButton.addEventListener("click", async () => {
				const strong = document.querySelector("strong");
				if (strong) {
					const key = strong.textContent;
					chrome.storage.sync.set({ key: key });
				}
			});
		}
	};

	// DOMの変更の監視
	const observer = new MutationObserver((mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const element = document.querySelector(target);
				if (element) {
					onElementFound(element);
				}
			}
		}
	});

	// 監視を開始する
	observer.observe(document.body, { childList: true, subtree: true });
}

registerKey();
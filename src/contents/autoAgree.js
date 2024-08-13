// 
// autoAgree.js
// https://ufidp-t.cii.u-fukui.ac.jp/idp/profile/SAML2/* にアクセス時に実行
// 送信属性の選択画面だったら、同意ボタンを自動で押す。
// 
async function autoAgree() {
	// 要素が表示されたら実行する関数
	const onElementFound = async (element) => {
		const button = document.querySelector('input[type="submit"][name="_eventId_proceed"][value="同意"]');
		if (button) button.click();
	};

	// DOMの変更の監視
	const observer = new MutationObserver(async (mutationsList) => {
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				const element = document.getElementById("generalConsentDiv");
				if (element) {
					await onElementFound(element);
				}
			}
		}
	});

	// DOM変更前も調べる
	const sendAttribute = document.getElementById("generalConsentDiv");
	if (sendAttribute) {
		const button = document.querySelector('input[type="submit"][name="_eventId_proceed"][value="同意"]');
		if (button) button.click();
	}
	// 監視を開始する
	observer.observe(document.body, { childList: true, subtree: true });
}

autoAgree();

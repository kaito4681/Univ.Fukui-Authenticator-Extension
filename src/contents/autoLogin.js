//
// autoLogin.js
// ログインボタンを自動でクリックする。
//
const PASSWORD_INPUT_TIME = 3000; // 0.3秒

async function checkAutoLogin() {
	const result = await chrome.storage.sync.get(['autoLogin']);
	const auto = result.autoLogin;
	if (auto === true) {
		return true;
	} else {
		return false;
	}
}

async function autoLogin() {
	const target = 'input#loginButton_0[name="callback_2"][value="ログイン"]';

	function triggerClick(element) {
		const event = new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window,
		});
		element.dispatchEvent(event);
	}

	// 要素が表示されたら実行する関数
	const onElementFound = async (element) => {
		console.log('press-before');
		const autoLoginEnable = await checkAutoLogin();
		console.log(autoLoginEnable);
		document.querySelector('input').click();

		if (autoLoginEnable === true) {
			setTimeout(() => {
				console.log('press-after');
				triggerClick(element);
			}, PASSWORD_INPUT_TIME);
		}
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

autoLogin();

// キーのリセット
document.getElementById("textButton").addEventListener("click", () => {
	const textInput = document.getElementById("textInput");
	const message = document.getElementById("message");
	key = textInput.value;
	if (key !== "") {
		chrome.storage.sync.set({ key: key }, () => {
			if (chrome.runtime.lastError) {
				alert("エラーが発生しました。もう一度実行してください。")
				message.textContent = "エラーが発生しました。もう一度実行してください。"
			} else {
				message.textContent = "キーを再設定しました。"
			}
		});
	}
});

//autoLogin
//初期状態
(async () => {
	const result = await chrome.storage.sync.get(["autoLogin"]);
	const autoLogin = result.autoLogin;
	if(autoLogin === true){
		document.getElementById('autoLogin').checked = true;
	}
})();


// チェックボックスの状態が変わったときの処理
document.getElementById('autoLogin').addEventListener('change', function () {
	chrome.storage.sync.set({ autoLogin: this.checked }, () => {
		if (chrome.runtime.lastError) {
			this.checked = !this.checked;
			alert("エラーが発生しました。もう一度実行してください。");
		}
	});
});
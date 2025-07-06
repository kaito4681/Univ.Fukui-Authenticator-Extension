// キーのリセット
document.getElementById('textButton').addEventListener('click', () => {
	const textInput = document.getElementById('textInput');
	const message = document.getElementById('message');
	const key = textInput.value;
	if (key !== '') {
		chrome.storage.sync.set({ key: key }, () => {
			if (chrome.runtime.lastError) {
				alert('エラーが発生しました。もう一度実行してください。');
				message.textContent =
					'エラーが発生しました。もう一度実行してください。';
			} else {
				message.textContent = 'キーを再設定しました。';
			}
		});
	}
});

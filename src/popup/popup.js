import { TOTP } from "totp-generator";

// クリップボードにコピー
document.getElementById("copy").addEventListener("click", async () => {
	// パスワード生成
	const result = await chrome.storage.sync.get(["key"]);
	const key = result.key;
	const message = document.getElementById("message");
	if (key === undefined) {
		message.textContent = "keyが登録されていません。";
	} else {
		try {
			const password = TOTP.generate(key).otp;
			// クリップボードに書き込み 
			await navigator.clipboard.writeText(password);
			message.textContent = "クリップボードにコピーしました。";
		} catch (err) {
			message.textContent = "エラーが発生しました。もう一度試してください。";
		}
	}
	// 3秒間メッセージを表示
	message.classList.remove("hidden");
	setTimeout(() => {
		message.classList.add("hidden");
	}, 3000);
});

// 説明画面へ遷移
document.getElementById("how").addEventListener("click", () => {
	chrome.tabs.create({
		url: chrome.runtime.getURL("../instruction/instruction.html"),
		active: true
	});
});

//設定画面へ遷移
document.getElementById("setting").addEventListener("click", () => {
	chrome.tabs.create({
		url: chrome.runtime.getURL("../setting/setting.html"),
		active: true
	});
});

//GitHubを新規タブで開く
document.getElementById("about").addEventListener("click", () => {
	chrome.tabs.create({
		url: "https://github.com/kaito4681/Univ.Fukui-Autonicator",
		active: true
	});
});
//GitHubのissueを新規タブで開く
document.getElementById("feedback").addEventListener("click", () => {
	chrome.tabs.create({
		url: "https://github.com/kaito4681/Univ.Fukui-Autonicator/issues",
		active: true
	});
});
import { TOTP } from "totp-generator";

// クリップボードにコピー
document.getElementById("copy").addEventListener("click", () => {
	// パスワード生成
	let key;
	chrome.storage.sync.get(["key"]).then((result) => {
		key = result.key;
		const password = TOTP.generate(key).otp;

		// クリップボードに書き込み -> 3秒間メッセージを表示
		const message = document.getElementById("message");
		navigator.clipboard.writeText(password).then(function () {
			message.textContent = "クリップボードにコピーしました。";
		}).catch(function (err) {
			message.textContent = "エラーが発生しました。もう一度試してくだい";
		});
		message.classList.remove("hidden");
		setTimeout(() => {
			message.classList.add("hidden");
		}, 3000);
	});
});

// 
document.getElementById("copy").addEventListener("click", () => {
	// パスワード生成
	let key;
	chrome.storage.sync.get(["key"]).then((result) => {
		key = result.key;
		const password = TOTP.generate(key).otp;

		// クリップボードに書き込み -> 3秒間メッセージを表示
		const message = document.getElementById("message");
		navigator.clipboard.writeText(password).then(function () {
			message.textContent = "クリップボードにコピーしました。";
		}).catch(function (err) {
			message.textContent = "エラーが発生しました。もう一度試してくだい";
		});
		message.classList.remove("hidden");
		setTimeout(() => {
			message.classList.add("hidden");
		}, 3000);
	});
});

//生成キーの再設定画面へ遷移
document.getElementById("reset").addEventListener("click", () => {
	chrome.tabs.create({
		url: chrome.runtime.getURL("reset/reset.html"),
		active: true
	});
});

//設定画面へ遷移
document.getElementById("setting").addEventListener("click", () => {
	chrome.tabs.create({
		url: chrome.runtime.getURL("setting/setting.html"),
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
// 
// autoAgree.js
// https://ufidp-t.cii.u-fukui.ac.jp/idp/profile/SAML2/* にアクセス時に実行
// 送信属性の選択画面だったら、同意ボタンを自動で押す。
// 
if (document.getElementById("#generalConsentDiv")) {
	const button = document.querySelector('input[type="submit"][name="_eventId_proceed"][value="同意"]');
	if (button) button.click();
}

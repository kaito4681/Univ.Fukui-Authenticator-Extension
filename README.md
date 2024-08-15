# 福井大学専用　Authenticator

## インストール方法
Chrome ウェブストア（インストールは[こちら](https://chromewebstore.google.com/detail/%E7%A6%8F%E4%BA%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%AB%E7%94%A8authenticator/agbeddljnfggabajkjfamdfcelkmlanc?authuser=0&hl=ja))



## ビルド方法
npm i  
npx webpack  

上のコマンドを実行後、distディレクトリを拡張機能として読み込む。

## 設定方法

### 初めて設定する場合、もしくは key がわからない場合

1. [学生ポータル](https://lss.sao.u-fukui.ac.jp/Portal/)を開きます。
   
2. ログインをします。  
   ![ログイン画面](/src/instruction/login.png)

3. デバイスの登録をクリックします。  
   ![デバイス登録の説明画面](/src/instruction/device.png)

4. スマホなど他の端末にも登録しておきたい場合は QR コードを読み取っておきます。パソコンのみ登録する場合は、手動で入力をクリックします。  
   ![QRコードの画面](/src/instruction/qr-fix.png)

5. この拡張機能をインストールしてある場合は、ボタンが「拡張機能に KEY を登録して次に進む」に変わっているので、そのボタンをクリックすることで、KEY を登録することができます。  
   ![KEYを表示する画面](/src/instruction/key.png)

6. ワンタイムパスワードの確認画面では、自動で入力、送信されます。
   
7. 以上で、設定は完了です。これ以降は、ワンタイムパスワードは自動で入力送信されます。

### key がすでに分かっている場合

- 拡張機能のアイコンをクリックし、「設定」ボタンをクリックすると、入力画面になります。
  
